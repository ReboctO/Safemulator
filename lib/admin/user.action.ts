'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import prisma from '../prisma'

// UserRole enum and type
export const UserRoleEnum = z.enum(['ADMIN', 'STAFF', 'DEAN', 'STUDENT']);
export type UserRole = z.infer<typeof UserRoleEnum>;

// Base User schema
export const UserSchema = z.object({
  id: z.string(),
  clerkId: z.string(),
  username: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  role: UserRoleEnum,
  image: z.string().optional().nullable(),
  isActive: z.boolean().default(true),
  createdAt: z.date().or(z.string().datetime()),
  updatedAt: z.date().or(z.string().datetime()),
  
  // Optional relations
  admin: z.any().optional().nullable(),
  staff: z.any().optional().nullable(),
  dean: z.any().optional().nullable(),
  student: z.any().optional().nullable(),
});

async function handleError<T>(
  fn: () => Promise<T>,
  shouldRevalidate = false
): Promise<{ success: true; data: T } | { success: false; error: string }> {
  try {
    const data = await fn()
    if (shouldRevalidate) revalidatePath('/admin/usermanagement')
    return { success: true, data }
  } catch (error) {
    console.error(error)
    return { success: false, error: error instanceof Error ? error.message : 'Operation failed' }
  }
}
export async function getUsers() {
  return 
  
}
