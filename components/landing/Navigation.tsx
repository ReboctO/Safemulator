"use client"
import { Shield } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-dark-2 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href = {'/'} className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-slate-300 hover:text-white">SafeMulator</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-slate-300 hover:text-white transition">About</a>
            <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
            <a href="#objectives" className="text-slate-300 hover:text-white transition">Objectives</a>
            <a href="#footer" className="text-slate-300 hover:text-white transition">Contact</a>
          </div>
          <Link href="/sign-in">
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}