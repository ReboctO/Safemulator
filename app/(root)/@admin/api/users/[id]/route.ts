import { NextResponse } from 'next/server'
import prisma from '../../../../../../lib/prisma'
import { clerkClient } from '@clerk/nextjs/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        admin: true,
        staff: true,
        dean: true,
        student: true,
      }
    })
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }
    
    return NextResponse.json(user)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { username, email, firstName, lastName, department, role } = body

    const existingUser = await prisma.user.findUnique({
      where: { id },
      include: {
        admin: true,
        staff: true,
        dean: true,
        student: true,
      }
    })

    if (!existingUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Update user in Clerk
    await (await clerkClient()).users.updateUser(existingUser.clerkId, {
      username,
      firstName,
      lastName,
    })

    // Handle role changes - delete old role records and create new ones if role changed
    const updateData: any = {
      username,
      email,
      firstName,
      lastName,
      role,
    }

    // If role changed, handle the transition
    if (existingUser.role !== role) {
      // Delete old role-specific records
      if (existingUser.admin) {
        updateData.admin = { delete: true }
      }
      if (existingUser.staff) {
        updateData.staff = { delete: true }
      }
      if (existingUser.dean) {
        updateData.dean = { delete: true }
      }
      if (existingUser.student) {
        updateData.student = { delete: true }
      }

      // Create new role-specific record
      if (role === 'ADMIN') {
        updateData.admin = { create: {} }
      } else if (role === 'STAFF') {
        updateData.staff = { create: { department } }
      } else if (role === 'DEAN') {
        updateData.dean = { create: { department } }
      } else if (role === 'STUDENT') {
        updateData.student = { create: { department } }
      }
    } else {
      // Same role, just update department if applicable
      if (role === 'STAFF' && existingUser.staff) {
        updateData.staff = { update: { department } }
      } else if (role === 'DEAN' && existingUser.dean) {
        updateData.dean = { update: { department } }
      } else if (role === 'STUDENT' && existingUser.student) {
        updateData.student = { update: { department } }
      }
    }

    // Update user in database
    const user = await prisma.user.update({
      where: { id },
      data: updateData,
      include: {
        admin: true,
        staff: true,
        dean: true,
        student: true,
      },
    })

    return NextResponse.json(user)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const user = await prisma.user.findUnique({
      where: { id }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Delete user from Clerk
    await (await clerkClient()).users.deleteUser(user.clerkId)

    // Delete user from database
    await prisma.user.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'User deleted successfully' })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
