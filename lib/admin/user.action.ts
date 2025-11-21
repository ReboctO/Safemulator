"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import prisma from "../prisma";
import { User } from "@prisma/client";

// UserRole enum and type
export const UserRoleEnum = z.enum(["ADMIN", "STAFF", "DEAN", "STUDENT"]);
export type UserRole = z.infer<typeof UserRoleEnum>;

// Schema for creating users
const CreateUserSchema = z.object({
  clerkId: z.string(),
  username: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  role: UserRoleEnum,
  image: z.string().optional().nullable(),
  department: z.string().optional(),
});

// Schema for updating users
const UpdateUserSchema = z.object({
  username: z.string().optional(),
  email: z.string().email().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  image: z.string().optional().nullable(),
  role: UserRoleEnum.optional(),
  isActive: z.boolean().optional(),
  department: z.string().optional(),
});

export interface ActionResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

interface CreateUserParams {
  clerkId: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  image?: string;
  department?: string;
}

interface UpdateUserParams {
  clerkId: string;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  image?: string;
  role?: UserRole;
  isActive?: boolean;
  department?: string;
  path?: string;
}

async function handleError<T>(
  fn: () => Promise<T>,
  shouldRevalidate = false
): Promise<{ success: true; data: T } | { success: false; error: string }> {
  try {
    const data = await fn();
    if (shouldRevalidate) revalidatePath("/admin/usermanagement");
    return { success: true, data };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Operation failed",
    };
  }
}

export async function getUsers() {
  return handleError(async () => {
    return prisma.user.findMany({
      orderBy: { username: "asc" },
      include: {
        admin: true,
        staff: true,
        dean: true,
        student: true,
      },
    });
  });
}

export async function createUser(
  input: CreateUserParams
): Promise<ActionResponse<User>> {
  return handleError(async () => {
    const { department, ...userData } = CreateUserSchema.parse(input);

    // Validate department is provided for roles that require it
    if (["STAFF", "DEAN", "STUDENT"].includes(userData.role) && !department) {
      throw new Error(`Department is required for ${userData.role} role`);
    }

    return prisma.user.create({
      data: {
        ...userData,
        admin: userData.role === "ADMIN" ? { create: {} } : undefined,
        staff:
          userData.role === "STAFF"
            ? { create: { department: department! } }
            : undefined,
        dean:
          userData.role === "DEAN"
            ? { create: { department: department! } }
            : undefined,
        student:
          userData.role === "STUDENT"
            ? { create: { department: department! } }
            : undefined,
      },
    });
  }, true);
}

export async function updateUser({
  clerkId,
  path,
  ...input
}: UpdateUserParams): Promise<ActionResponse<User>> {
  return handleError(async () => {
    const user = await prisma.user.findUnique({
      where: { clerkId },
      include: { admin: true, staff: true, dean: true, student: true },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const { department, role, ...userData } = UpdateUserSchema.parse(input);
    const newRole = role ?? user.role;

    // Validate department for roles that require it
    if (
      ["STAFF", "DEAN", "STUDENT"].includes(newRole) &&
      role &&
      role !== user.role &&
      !department
    ) {
      throw new Error(`Department is required for ${newRole} role`);
    }

    // If role is changing, handle relation updates
    if (role && role !== user.role) {
      // Delete old role relation
      if (user.admin) await prisma.admin.delete({ where: { userId: user.id } });
      if (user.staff) await prisma.staff.delete({ where: { userId: user.id } });
      if (user.dean) await prisma.dean.delete({ where: { userId: user.id } });
      if (user.student)
        await prisma.student.delete({ where: { userId: user.id } });

      // Create new role relation
      const roleRelation = {
        ADMIN: () => prisma.admin.create({ data: { userId: user.id } }),
        STAFF: () =>
          prisma.staff.create({
            data: { userId: user.id, department: department! },
          }),
        DEAN: () =>
          prisma.dean.create({
            data: { userId: user.id, department: department! },
          }),
        STUDENT: () =>
          prisma.student.create({
            data: { userId: user.id, department: department! },
          }),
      };

      await roleRelation[newRole]();
    } else if (department) {
      // Update department for existing role relation
      if (user.staff) {
        await prisma.staff.update({
          where: { userId: user.id },
          data: { department },
        });
      } else if (user.dean) {
        await prisma.dean.update({
          where: { userId: user.id },
          data: { department },
        });
      } else if (user.student) {
        await prisma.student.update({
          where: { userId: user.id },
          data: { department },
        });
      }
    }

    return prisma.user.update({
      where: { clerkId },
      data: {
        ...userData,
        role: newRole,
      },
    });
  }, true);
}

export async function deleteUser(
  clerkId: string,
  softDelete = true
): Promise<ActionResponse<User>> {
  return handleError(async () => {
    const user = await prisma.user.findUnique({ where: { clerkId } });

    if (!user) {
      throw new Error("User not found");
    }

    if (softDelete) {
      return prisma.user.update({
        where: { clerkId },
        data: { isActive: false, updatedAt: new Date() },
      });
    }

    // Hard delete - relations will cascade due to onDelete: Cascade
    return prisma.user.delete({
      where: { clerkId },
    });
  }, true);
}
