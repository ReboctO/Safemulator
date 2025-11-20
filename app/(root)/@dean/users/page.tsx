'use client'
import React, { useState } from 'react';
import { 
  Users, Activity, FileText, BarChart3, TrendingUp, 
  Clock, CheckCircle, XCircle, AlertTriangle, 
  Search, Filter, Download, Eye, Shield, MapPin,
  Calendar, Award, Target, Menu, X, Home, Settings,
  ChevronRight, User
} from 'lucide-react';
const mockUsers = [
  { id: 1, name: 'Juan Dela Cruz', email: 'juan.delacruz@uc.edu.ph', role: 'Student', department: 'IT', completedDrills: 8, lastActive: '2024-11-10', status: 'active' },
  { id: 2, name: 'Maria Santos', email: 'maria.santos@uc.edu.ph', role: 'Faculty', department: 'Engineering', completedDrills: 12, lastActive: '2024-11-12', status: 'active' },
  { id: 3, name: 'Pedro Reyes', email: 'pedro.reyes@uc.edu.ph', role: 'Student', department: 'Business', completedDrills: 5, lastActive: '2024-11-08', status: 'inactive' },
  { id: 4, name: 'Ana Mendoza', email: 'ana.mendoza@uc.edu.ph', role: 'Staff', department: 'Admin', completedDrills: 15, lastActive: '2024-11-13', status: 'active' },
  { id: 5, name: 'Carlos Garcia', email: 'carlos.garcia@uc.edu.ph', role: 'Student', department: 'IT', completedDrills: 3, lastActive: '2024-11-11', status: 'active' },
  { id: 6, name: 'Lisa Ramos', email: 'lisa.ramos@uc.edu.ph', role: 'Student', department: 'Nursing', completedDrills: 10, lastActive: '2024-11-13', status: 'active' },
  { id: 7, name: 'Miguel Torres', email: 'miguel.torres@uc.edu.ph', role: 'Faculty', department: 'IT', completedDrills: 14, lastActive: '2024-11-12', status: 'active' },
  { id: 8, name: 'Sofia Cruz', email: 'sofia.cruz@uc.edu.ph', role: 'Student', department: 'Engineering', completedDrills: 7, lastActive: '2024-11-09', status: 'active' },
];
  const UsersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

    return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Users Management</h2>
          <p className="text-slate-600 mt-1">Manage and monitor all system users</p>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center gap-2">
          <Download className="h-4 w-4" />
          Export Data
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition">
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">User</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Role</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Department</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Completed Drills</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Last Active</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {mockUsers.filter(user => 
                user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.email.toLowerCase().includes(searchQuery.toLowerCase())
              ).map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-semibold">{user.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{user.name}</p>
                        <p className="text-sm text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      user.role === 'Faculty' ? 'bg-purple-100 text-purple-700' :
                      user.role === 'Staff' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{user.department}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-slate-900">{user.completedDrills}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{user.lastActive}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-red-600 hover:text-red-700">
                      <Eye className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default UsersPage;
