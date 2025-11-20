'use client'

import { User, Admin, Staff, Dean, Student } from '@prisma/client'
import { X } from 'lucide-react'

type UserWithRelations = User & {
  admin?: Admin | null
  staff?: Staff | null
  dean?: Dean | null
  student?: Student | null
}

export default function UserModal({ user, onClose }: { user: UserWithRelations; onClose: () => void }) {
  const getDepartment = () => {
    return user.admin ? 'N/A' : 
           user.staff?.department || 
           user.dean?.department || 
           user.student?.department || 
           'N/A'
  }
  return (
    <div className="inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">User Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-500">ID</label>
            <p className="text-gray-900">{user.id}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Username</label>
            <p className="text-gray-900">{user.username}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Email</label>
            <p className="text-gray-900">{user.email}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">First Name</label>
            <p className="text-gray-900">{user.firstName}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Last Name</label>
            <p className="text-gray-900">{user.lastName}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Department</label>
            <p className="text-gray-900">{getDepartment()}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Role</label>
            <p className="text-gray-900">{user.role}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Created At</label>
            <p className="text-gray-900">{new Date(user.createdAt).toLocaleString()}</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  )
}
