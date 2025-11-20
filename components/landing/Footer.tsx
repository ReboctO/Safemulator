// components/landing/Footer.tsx
"use client"
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold text-white">SafeMulator</span>
            </div>
            <p className="text-slate-400">
              Advancing emergency preparedness through immersive 3D simulation technology at UC-Main Campus.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#objectives" className="hover:text-white transition">Research Objectives</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-slate-400 mb-2">University of Cebu - Main Campus</p>
            <p className="text-slate-400">Quezon City, Metro Manila, Philippines</p>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
          <p>&copy; 2025 SafeMulator Research Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}