"use server";

import prisma from "../../lib/prisma";
import { revalidatePath } from "next/cache";
import { UserRole } from "@prisma/client";

export async function fetchUser(clerkId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { clerkId },
      include: {
        admin: true,
        staff: true,
        student:true,
        dean: true
      },
    });
    return user;
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
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

export async function createUser(params: CreateUserParams) {
  try {
    const { clerkId, username, email, firstName, lastName, role, image, department } = params;

    const user = await prisma.user.create({
      data: {
        clerkId,
        username,
        email,
        firstName,
        lastName,
        role,
        image,
      },
    });

    // Create role-specific record
    switch (role) {
      case UserRole.ADMIN:
        await prisma.admin.create({
          data: { userId: user.id },
        });
        break;
      case UserRole.STAFF:
        await prisma.staff.create({
          data: { 
            userId: user.id,
            department: department || "General",
          },
        });
        break;
      case UserRole.DEAN:
        await prisma.dean.create({
          data: { 
            userId: user.id,
            department: department || "General",
          },
        });
        break;
      case UserRole.STUDENT:
        await prisma.student.create({
          data: { 
            userId: user.id,
            department: department || "General",
          },
        });
        break;
    }

    return user;
  } catch (error: any) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
}

interface UpdateDeanProfileParams {
  clerkId: string;
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
  path?: string;
}

export async function updateDeanProfile(params: UpdateDeanProfileParams) {
  try {
    const { clerkId, firstName, lastName, email, image, path } = params;

    const user = await prisma.user.update({
      where: { clerkId },
      data: {
        firstName,
        lastName,
        email,
        ...(image && { image }),
      },
    });

    if (path) {
      revalidatePath(path);
    }

    return user;
  } catch (error: any) {
    throw new Error(`Failed to update dean profile: ${error.message}`);
  }
}

interface UpdateUserParams {
  clerkId: string;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  image?: string;
  isActive?: boolean;
  department?: string;
  path?: string;
}

export async function updateUser(params: UpdateUserParams) {
  try {
    const { clerkId, path, department, ...updateData } = params;

    const user = await prisma.user.findUnique({
      where: { clerkId },
      include: {
        staff: true,
        dean: true,
        student: true,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const updatedUser = await prisma.user.update({
      where: { clerkId },
      data: updateData,
    });

    // Update department if provided and user has role-specific record
    if (department) {
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

    if (path) {
      revalidatePath(path);
    }

    return updatedUser;
  } catch (error: any) {
    throw new Error(`Failed to update user: ${error.message}`);
  }
}

export async function toggleUserStatus(clerkId: string, path?: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const updatedUser = await prisma.user.update({
      where: { clerkId },
      data: { isActive: !user.isActive },
    });

    if (path) {
      revalidatePath(path);
    }

    return updatedUser;
  } catch (error: any) {
    throw new Error(`Failed to toggle user status: ${error.message}`);
  }
}

export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany({
      include: {
        admin: true,
        staff: true,
        dean: true,
        student: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return users;
  } catch (error: any) {
    throw new Error(`Failed to fetch users: ${error.message}`);
  }
}

export async function getUsersByRole(role: UserRole) {
  try {
    const users = await prisma.user.findMany({
      where: { role },
      include: {
        admin: true,
        staff: true,
        dean: true,
        student: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return users;
  } catch (error: any) {
    throw new Error(`Failed to fetch users by role: ${error.message}`);
  }
}
