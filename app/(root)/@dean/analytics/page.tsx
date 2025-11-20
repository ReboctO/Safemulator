'use client'
import React, { useState } from 'react';
import { 
  Users, Activity, FileText, BarChart3, TrendingUp, 
  Clock, CheckCircle, XCircle, AlertTriangle, 
  Search, Filter, Download, Eye, Shield, MapPin,
  Calendar, Award, Target, Menu, X, Home, Settings,
  ChevronRight, User
} from 'lucide-react';

  const AnalyticsPage = () =>{
    
    return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Analytics & Reports</h2>
        <p className="text-slate-600 mt-1">Comprehensive insights and performance metrics</p>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Users className="h-8 w-8 opacity-80" />
            <span className="text-sm bg-white/20 px-2 py-1 rounded">+15%</span>
          </div>
          <p className="text-3xl font-bold mb-1">1,247</p>
          <p className="text-blue-100 text-sm">Total Participants</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <CheckCircle className="h-8 w-8 opacity-80" />
            <span className="text-sm bg-white/20 px-2 py-1 rounded">+23%</span>
          </div>
          <p className="text-3xl font-bold mb-1">8,934</p>
          <p className="text-green-100 text-sm">Drills Completed</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Clock className="h-8 w-8 opacity-80" />
            <span className="text-sm bg-white/20 px-2 py-1 rounded">-8%</span>
          </div>
          <p className="text-3xl font-bold mb-1">4:35</p>
          <p className="text-orange-100 text-sm">Avg. Duration</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Award className="h-8 w-8 opacity-80" />
            <span className="text-sm bg-white/20 px-2 py-1 rounded">+5%</span>
          </div>
          <p className="text-3xl font-bold mb-1">86.5%</p>
          <p className="text-purple-100 text-sm">Success Rate</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Drill Type Distribution */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Drill Type Distribution</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span className="text-sm text-slate-600">Fire Evacuation</span>
                </div>
                <span className="text-sm font-semibold text-slate-900">5,807 (65%)</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div className="bg-red-500 h-3 rounded-full" style={{width: '65%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded"></div>
                  <span className="text-sm text-slate-600">Earthquake Response</span>
                </div>
                <span className="text-sm font-semibold text-slate-900">3,127 (35%)</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div className="bg-orange-500 h-3 rounded-full" style={{width: '35%'}}></div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-200">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-slate-900">5.2k</p>
                <p className="text-xs text-slate-500">This Month</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">+18%</p>
                <p className="text-xs text-slate-500">Growth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Department Performance */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Department Performance</h3>
          <div className="space-y-4">
            {[
              { dept: 'Information Technology', score: 92, drills: 234, color: 'bg-blue-500' },
              { dept: 'Engineering', score: 88, drills: 198, color: 'bg-purple-500' },
              { dept: 'Business Administration', score: 85, drills: 176, color: 'bg-green-500' },
              { dept: 'Nursing', score: 90, drills: 156, color: 'bg-pink-500' },
              { dept: 'Education', score: 83, drills: 142, color: 'bg-yellow-500' },
            ].map((dept, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`w-2 h-12 ${dept.color} rounded`}></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-slate-900">{dept.dept}</span>
                    <span className="text-sm font-semibold text-slate-900">{dept.score}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 bg-slate-200 rounded-full h-2 mr-2">
                      <div className={`${dept.color} h-2 rounded-full`} style={{width: `${dept.score}%`}}></div>
                    </div>
                    <span className="text-xs text-slate-500">{dept.drills} drills</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Building Activity Map */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Building Activity Heatmap</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { name: 'Main Building', drills: 234, intensity: 'high' },
            { name: 'IT Building', drills: 198, intensity: 'high' },
            { name: 'Engineering Bldg', drills: 176, intensity: 'medium' },
            { name: 'Library', drills: 156, intensity: 'medium' },
            { name: 'Admin Building', drills: 142, intensity: 'medium' },
            { name: 'Nursing Building', drills: 128, intensity: 'medium' },
            { name: 'Business Bldg', drills: 98, intensity: 'low' },
            { name: 'Sports Complex', drills: 76, intensity: 'low' },
          ].map((building, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border-2 ${
                building.intensity === 'high' ? 'bg-red-50 border-red-300' :
                building.intensity === 'medium' ? 'bg-orange-50 border-orange-300' :
                'bg-yellow-50 border-yellow-300'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <MapPin className={`h-5 w-5 ${
                  building.intensity === 'high' ? 'text-red-600' :
                  building.intensity === 'medium' ? 'text-orange-600' :
                  'text-yellow-600'
                }`} />
                <span className={`text-xs font-semibold px-2 py-1 rounded ${
                  building.intensity === 'high' ? 'bg-red-100 text-red-700' :
                  building.intensity === 'medium' ? 'bg-orange-100 text-orange-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {building.intensity}
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-900 mb-1">{building.name}</p>
              <p className="text-xs text-slate-600">{building.drills} completed drills</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Trends */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Weekly Trend Analysis</h3>
        <div className="grid grid-cols-7 gap-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
            const height = [65, 78, 82, 70, 85, 45, 38][index];
            return (
              <div key={index} className="text-center">
                <div className="h-32 flex items-end justify-center mb-2">
                  <div 
                    className="w-full bg-gradient-to-t from-red-500 to-orange-400 rounded-t hover:from-red-600 hover:to-orange-500 transition cursor-pointer"
                    style={{height: `${height}%`}}
                  ></div>
                </div>
                <p className="text-xs font-medium text-slate-600">{day}</p>
                <p className="text-xs text-slate-500">{Math.round(height * 1.5)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
  
export default AnalyticsPage;
