"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function fetchUser(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });
    return user;
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

interface Params {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  role: string;
  image: string;
  path: string;
}

export async function updateUser({
  firstName,
  lastName,
  email,
  department,
  role,
  path,
  image,
}: Params): Promise<void> {
  try {
    await prisma.user.upsert({
      where: { clerkId: userId },
      update: {
        firstName,
        lastName,
        email,
        department,
        image,
        onboarded: true,
      },
    });

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}