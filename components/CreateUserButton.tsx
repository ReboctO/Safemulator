'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react'
import CreateUserModal from './CreateUserModal'

export default function CreateUserButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        <Plus className="w-5 h-5" />
        Create User
      </button>

      {isOpen && <CreateUserModal onClose={() => setIsOpen(false)} />}
    </>
  )
}
