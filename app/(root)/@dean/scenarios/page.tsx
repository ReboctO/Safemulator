'use client'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scenario Reports - SafeMulator',
  description: 'Fire and earthquake drill scenario analysis',
};

export default function ScenariosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Scenario Reports</h1>
        <p className="text-gray-600 mt-2">
          Detailed analysis of fire and earthquake drill scenarios
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg shadow border border-orange-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🔥</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Fire Drills</h3>
              <p className="text-sm text-gray-600">124 completed drills</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Avg. Evacuation Time</span>
              <span className="text-sm font-semibold">4:12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Success Rate</span>
              <span className="text-sm font-semibold text-green-600">94%</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🌊</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Earthquake Drills</h3>
              <p className="text-sm text-gray-600">98 completed drills</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Avg. Response Time</span>
              <span className="text-sm font-semibold">2:48</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Success Rate</span>
              <span className="text-sm font-semibold text-green-600">91%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
