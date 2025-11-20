import { UserButton } from '@clerk/nextjs'
import prisma from '../../../lib/prisma'
import UserTable from '../../../components/UserTable'
import CreateUserButton from '../../../components/CreateUserButton'

export default async function DashboardPage() {
  let users = []
  
  try {
    users = await prisma.user.findMany({
      include: {
        admin: true,
        staff: true,
        dean: true,
        student: true,
      },
      orderBy: { createdAt: 'desc' }
    })
  } catch (error) {
    console.error('Failed to fetch users:', error)
    // You can return an error state here
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
              <UserButton />
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <h2 className="text-red-800 font-semibold">Database Connection Error</h2>
            <p className="text-red-600 mt-2">
              Unable to connect to the database. Please check your connection string in the .env file.
            </p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            <UserButton />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">User Management</h2>
          <CreateUserButton />
        </div>
        <UserTable users={users} />
      </main>
    </div>
  )
}