'use client'
import React, { useState } from 'react';
import { 
  Users, Activity, FileText, BarChart3, TrendingUp, 
  Clock, CheckCircle, XCircle, AlertTriangle, 
  Search, Filter, Download, Eye, Shield, MapPin,
  Calendar, Award, Target, Menu, X, Home, Settings,
  ChevronRight, User
} from 'lucide-react';

const mockDrillLogs = [
  { id: 1, userName: 'Juan Dela Cruz', drillType: 'Fire Evacuation', building: 'Main Building', duration: '4:32', score: 92, completedAt: '2024-11-13 10:30 AM', status: 'completed', exitUsed: 'Exit A' },
  { id: 2, userName: 'Maria Santos', drillType: 'Earthquake Response', building: 'Engineering Building', duration: '5:12', score: 88, completedAt: '2024-11-13 09:15 AM', status: 'completed', exitUsed: 'Exit B' },
  { id: 3, userName: 'Pedro Reyes', drillType: 'Fire Evacuation', building: 'Library', duration: '6:45', score: 75, completedAt: '2024-11-12 02:20 PM', status: 'completed', exitUsed: 'Exit C' },
  { id: 4, userName: 'Ana Mendoza', drillType: 'Earthquake Response', building: 'Admin Building', duration: '3:58', score: 95, completedAt: '2024-11-12 11:00 AM', status: 'completed', exitUsed: 'Exit A' },
  { id: 5, userName: 'Carlos Garcia', drillType: 'Fire Evacuation', building: 'IT Building', duration: '8:20', score: 68, completedAt: '2024-11-11 03:45 PM', status: 'completed', exitUsed: 'Exit D' },
  { id: 6, userName: 'Lisa Ramos', drillType: 'Earthquake Response', building: 'Nursing Building', duration: '4:15', score: 90, completedAt: '2024-11-11 01:30 PM', status: 'completed', exitUsed: 'Exit B' },
  { id: 7, userName: 'Miguel Torres', drillType: 'Fire Evacuation', building: 'IT Building', duration: '3:42', score: 94, completedAt: '2024-11-10 11:20 AM', status: 'completed', exitUsed: 'Exit A' },
  { id: 8, userName: 'Sofia Cruz', drillType: 'Earthquake Response', building: 'Engineering Building', duration: '5:55', score: 82, completedAt: '2024-11-10 09:00 AM', status: 'completed', exitUsed: 'Exit C' },
];
  const DrillLogsPage = () => {
    
    return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Drill Logs</h2>
          <p className="text-slate-600 mt-1">View and analyze all completed drills</p>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center gap-2">
          <Download className="h-4 w-4" />
          Export Logs
        </button>
      </div>

      {/* Filter Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-l-blue-500">
          <p className="text-sm text-slate-600 mb-1">Total Logs</p>
          <p className="text-2xl font-bold text-slate-900">{mockDrillLogs.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-l-red-500">
          <p className="text-sm text-slate-600 mb-1">Fire Drills</p>
          <p className="text-2xl font-bold text-slate-900">{mockDrillLogs.filter(d => d.drillType === 'Fire Evacuation').length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-l-orange-500">
          <p className="text-sm text-slate-600 mb-1">Earthquake Drills</p>
          <p className="text-2xl font-bold text-slate-900">{mockDrillLogs.filter(d => d.drillType === 'Earthquake Response').length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-l-green-500">
          <p className="text-sm text-slate-600 mb-1">Avg. Score</p>
          <p className="text-2xl font-bold text-slate-900">{Math.round(mockDrillLogs.reduce((acc, d) => acc + d.score, 0) / mockDrillLogs.length)}%</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search drill logs..."
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      {/* Drill Logs Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">User</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Drill Type</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Building</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Duration</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Score</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Exit Used</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Completed At</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {mockDrillLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">{log.userName.charAt(0)}</span>
                      </div>
                      <span className="font-medium text-slate-900">{log.userName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full flex items-center gap-1 w-fit ${
                      log.drillType === 'Fire Evacuation' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {log.drillType === 'Fire Evacuation' ? <AlertTriangle className="h-3 w-3" /> : <Activity className="h-3 w-3" />}
                      {log.drillType}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="h-4 w-4" />
                      {log.building}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-slate-400" />
                      <span className="text-sm font-medium text-slate-900">{log.duration}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-16 h-2 rounded-full ${
                        log.score >= 90 ? 'bg-green-200' : log.score >= 75 ? 'bg-yellow-200' : 'bg-red-200'
                      }`}>
                        <div className={`h-2 rounded-full ${
                          log.score >= 90 ? 'bg-green-600' : log.score >= 75 ? 'bg-yellow-600' : 'bg-red-600'
                        }`} style={{width: `${log.score}%`}}></div>
                      </div>
                      <span className={`text-sm font-semibold ${
                        log.score >= 90 ? 'text-green-600' : log.score >= 75 ? 'text-yellow-600' : 'text-red-600'
                      }`}>{log.score}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{log.exitUsed}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{log.completedAt}</td>
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

export default DrillLogsPage;