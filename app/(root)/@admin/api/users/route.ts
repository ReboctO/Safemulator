import { NextResponse } from 'next/server'
import prisma from '../../../../../lib/prisma'
import { clerkClient } from '@clerk/nextjs/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, email, firstName, lastName, department, role, password } = body

    // Create user in Clerk
    const clerkUser = await (await clerkClient()).users.createUser({
      username,
      emailAddress: [email],
      firstName,
      lastName,
      password,
    })

    // Create user in database with appropriate relation
    const userData: any = {
      clerkId: clerkUser.id,
      username,
      email,
      firstName,
      lastName,
      role,
    }

    // Create the appropriate role-specific record
    if (role === 'ADMIN') {
      userData.admin = { create: {} }
    } else if (role === 'STAFF') {
      userData.staff = { create: { department } }
    } else if (role === 'DEAN') {
      userData.dean = { create: { department } }
    } else if (role === 'STUDENT') {
      userData.student = { create: { department } }
    }

    const user = await prisma.user.create({
      data: userData,
      include: {
        admin: true,
        staff: true,
        dean: true,
        student: true,
      },
    })

    return NextResponse.json(user, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        admin: true,
        staff: true,
        dean: true,
        student: true,
      },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(users)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
