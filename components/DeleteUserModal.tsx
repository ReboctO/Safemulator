'use client'

import { User, Admin, Staff, Dean, Student } from '@prisma/client'
import { AlertTriangle, X } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

type UserWithRelations = User & {
  admin?: Admin | null
  staff?: Staff | null
  dean?: Dean | null
  student?: Student | null
}

export default function DeleteUserModal({ user, onClose }: { user: UserWithRelations; onClose: () => void }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    setLoading(true)

    try {
      const response = await fetch(`/api/users/${user.id}`, {
        method: 'DELETE',
      })

      if (!response.ok) throw new Error('Failed to delete user')

      router.refresh()
      onClose()
    } catch (error) {
      alert('Error deleting user')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <h2 className="text-xl font-bold">Delete User</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-gray-600 mb-4">
          Are you sure you want to delete user <strong>{user.username}</strong>? This action cannot be undone and will also remove the user from Clerk.
        </p>

        <div className="flex gap-2">
          <button
            onClick={handleDelete}
            disabled={loading}
            className="flex-1 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 disabled:bg-gray-400"
          >
            {loading ? 'Deleting...' : 'Delete User'}
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
