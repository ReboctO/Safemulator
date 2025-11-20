"use client"
import { AlertTriangle, Map, Gamepad2, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
              <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
              <span className="text-sm font-medium text-red-700">Emergency Preparedness Innovation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Prepare for Emergencies Through Immersive <span className="text-red-600">3D Simulation</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              SafeMulator is a cutting-edge 3D video game simulator designed for UC-Main Campus, enabling students and staff to practice earthquake and fire evacuation protocols in a safe, engaging, and realistic virtual environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Launch Simulator
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-slate-600">Active Simulation</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">LIVE</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Map className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-slate-700">UC-Main Campus Layout</span>
                  </div>
                  <div className="flex items-center">
                    <Gamepad2 className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-slate-700">Interactive Training</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-slate-700">Real-time Feedback</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">2</div>
                  <div className="text-xs text-white/80">Scenarios</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">3D</div>
                  <div className="text-xs text-white/80">Environment</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-xs text-white/80">Safe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}