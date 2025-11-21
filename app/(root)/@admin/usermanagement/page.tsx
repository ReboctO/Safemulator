import { JSX } from 'react'
import { getUsers, UserRole } from '../../../../lib/admin/user.action'
import UserManagementClient from './usermanagement-client'
import { Admin, Staff, Dean, Student } from '@prisma/client'

type User = {
  id: string
  clerkId: string
  username: string
  email: string
  firstName: string
  lastName: string
  role: UserRole
  image?: string | null
  isActive: boolean
  createdAt: Date | string
  updatedAt: Date | string
  
  // Properly typed relations
  admin?: Admin | null
  staff?: Staff | null
  dean?: Dean | null
  student?: Student | null
}

export default async function UserManagementPage(): Promise<JSX.Element> {
  const result = await getUsers()
  const initialUsers: User[] = result.success ? result.data : []

  return <UserManagementClient initialUsers={initialUsers} />
}