// 'use server'

// import prisma from "./prisma";
// import { revalidatePath } from 'next/cache'
// import { z } from 'zod'

// // Define the schema with proper TypeScript inference
// const positionSchema = z.object({
//   posName: z.string().min(1, 'Position name is required'),
//   numofPositions: z.coerce.number().int().positive('Must be a positive number'),
//   posStatus: z.string().default('Open'),
// })

// // Infer TypeScript type from the schema
// type PositionInput = z.infer<typeof positionSchema>

// // Generic error-handling wrapper
// async function handleError<T>(
//   fn: () => Promise<T>,
//   shouldRevalidate: boolean = false
// ): Promise<{ success: true; data: T } | { success: false; error: string }> {
//   try {
//     const data = await fn()
//     if (shouldRevalidate) {
//       revalidatePath('/admin/positions')
//     }
//     return { success: true, data }
//   } catch (error: any) {
//     console.error('Database operation failed:', error)
//     return {
//       success: false,
//       error: error?.message ?? 'Operation failed',
//     }
//   }
// }

// // Get all positions
// export async function getPositions() {
//   return handleError(() =>
//     prisma.user.findMany({
//       orderBy: { username: 'asc' },
//     })
//   )
// }
// export async function getUserByRoleAndId() {
//     return await prisma.user.findUnique({
//         where:{
//             ...(clerkId!== undefined && clerkId ),
//             ...(role !== undefined && role)
//         }
//     })
// }

// // Create a new position
// export async function createPosition(input: PositionInput) {
//   return handleError(async () => {
//     const data = positionSchema.parse(input)
//     return prisma.position.create({ data })
//   }, true)
// }

// // Update an existing position
// export async function updatePosition({
//   posID,
//   ...input
// }: { posID: number } & PositionInput) {
//   return handleError(async () => {
//     const data = positionSchema.parse(input)
//     return prisma.position.update({
//       where: { posID },
//       data,
//     })
//   }, true)
// }

// // Deactivate (close) a position
// export async function deactivatePosition(posID: number) {
//   return handleError(
//     () =>
//       prisma.position.update({
//         where: { posID },
//         data: { posStatus: 'Closed' },
//       }),
//     true
//   )
// }