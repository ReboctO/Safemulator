'use client'
import React, { useState } from 'react';
import { 
  Users, Activity, FileText, BarChart3, TrendingUp, 
  Clock, CheckCircle, XCircle, AlertTriangle, 
  Search, Filter, Download, Eye, Shield, MapPin,
  Calendar, Award, Target, Menu, X, Home, Settings,
  ChevronRight, User
} from 'lucide-react';

const dashboardStats = {
  totalUsers: 1247,
  activeDrills: 28,
  completedDrills: 8934,
  averageScore: 86.5,
  totalBuildings: 12,
  safetyZones: 34
};
const recentActivity = [
  { type: 'drill_completed', user: 'Juan Dela Cruz', action: 'completed Fire Evacuation drill', time: '5 mins ago', building: 'Main Building' },
  { type: 'user_registered', user: 'New Student', action: 'registered to the system', time: '15 mins ago', building: null },
  { type: 'drill_completed', user: 'Maria Santos', action: 'completed Earthquake Response drill', time: '32 mins ago', building: 'Engineering Building' },
  { type: 'high_score', user: 'Ana Mendoza', action: 'achieved score of 95%', time: '1 hour ago', building: 'Admin Building' },
  { type: 'drill_started', user: 'Carlos Garcia', action: 'started Fire Evacuation drill', time: '2 hours ago', building: 'IT Building' },
];
  const DashboardPage = () => {
    return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Total Users</p>
              <p className="text-3xl font-bold text-slate-900">{dashboardStats.totalUsers}</p>
              <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                +12% from last month
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Active Drills</p>
              <p className="text-3xl font-bold text-slate-900">{dashboardStats.activeDrills}</p>
              <p className="text-sm text-blue-600 mt-2 flex items-center gap-1">
                <Activity className="h-4 w-4" />
                In progress now
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Completed Drills</p>
              <p className="text-3xl font-bold text-slate-900">{dashboardStats.completedDrills}</p>
              <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                +8% from last week
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Average Score</p>
              <p className="text-3xl font-bold text-slate-900">{dashboardStats.averageScore}%</p>
              <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                <Award className="h-4 w-4" />
                +3.2% improvement
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Recent Activity</h3>
          </div>
          <div className="p-6 space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activity.type === 'drill_completed' ? 'bg-green-100' :
                  activity.type === 'high_score' ? 'bg-orange-100' :
                  activity.type === 'user_registered' ? 'bg-blue-100' : 'bg-purple-100'
                }`}>
                  {activity.type === 'drill_completed' ? <CheckCircle className="h-5 w-5 text-green-600" /> :
                   activity.type === 'high_score' ? <Award className="h-5 w-5 text-orange-600" /> :
                   activity.type === 'user_registered' ? <User className="h-5 w-5 text-blue-600" /> :
                   <Activity className="h-5 w-5 text-purple-600" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-900">
                    <span className="font-semibold">{activity.user}</span> {activity.action}
                  </p>
                  {activity.building && (
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      {activity.building}
                    </p>
                  )}
                </div>
                <span className="text-xs text-slate-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Quick Stats</h3>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Fire Drills</span>
                <span className="text-sm font-semibold text-slate-900">65%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{width: '65%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Earthquake Drills</span>
                <span className="text-sm font-semibold text-slate-900">35%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{width: '35%'}}></div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-slate-900">Top Buildings</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Main Building</span>
                  <span className="text-sm font-semibold text-slate-900">234 drills</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">IT Building</span>
                  <span className="text-sm font-semibold text-slate-900">198 drills</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Engineering</span>
                  <span className="text-sm font-semibold text-slate-900">156 drills</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                <MapPin className="h-4 w-4" />
                <span>Campus Coverage</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">{dashboardStats.totalBuildings}/12</p>
              <p className="text-xs text-slate-500 mt-1">buildings with active drills</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DashboardPage;
