'use client'

import { AlertTriangle, Shield, Map, Gamepad2, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function SafeMulatorLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-dark-2 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-red-600" />
              <span className=" text-2xl font-bold text-slate-300 hover:text-white">SafeMulator</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-300 hover:text-white transition">About</a>
              <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
              <a href="#objectives" className="text-slate-300 hover:text-white transition">Objectives</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
            </div>
            <Link href="/sign-in">
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Problem Statement */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why SafeMulator?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Traditional emergency drills often fail to engage students and staff effectively, resulting in poor retention of safety procedures and inadequate preparedness for real emergencies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Low Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Conventional drills lack real-time urgency and fail to fully engage participants, leading to passive learning and poor retention.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Map className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Limited Awareness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Many students are unfamiliar with campus-specific evacuation routes and designated safety zones across UC-Main buildings.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>No Interactive Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  There is no centralized, interactive system offering safety education tailored to the university's unique structure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Key Features</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              SafeMulator combines immersive technology with practical safety training to create an effective learning experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Map,
                title: "Accurate Campus Layout",
                description: "Realistic 3D representation of UC-Main Campus buildings, pathways, and safety zones for authentic training."
              },
              {
                icon: Gamepad2,
                title: "Realistic Scenarios",
                description: "Simulates earthquake and fire emergencies with dynamic environmental effects and challenges."
              },
              {
                icon: TrendingUp,
                title: "Adaptive Routes",
                description: "Real-time evacuation path calculation based on user location and emergency type for optimal safety."
              },
              {
                icon: Users,
                title: "Self-Paced Learning",
                description: "User-directed exploration allowing individuals to learn at their own pace without time pressure."
              },
              {
                icon: CheckCircle,
                title: "Progress Tracking",
                description: "Gamified elements and feedback systems that encourage repetition and improve retention."
              },
              {
                icon: Shield,
                title: "Safe Environment",
                description: "Practice emergency responses without any physical risk in a controlled virtual space."
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Research Objectives</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our study aims to analyze, design, develop, and evaluate SafeMulator to improve emergency preparedness at UC-Main Campus.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-red-600">
              <CardHeader>
                <CardTitle className="text-xl">System Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600">Evaluate effectiveness of traditional earthquake and fire drills</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600">Assess awareness of safety zones and evacuation procedures</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600">Identify gaps in current emergency preparedness resources</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-red-600">
              <CardHeader>
                <CardTitle className="text-xl">Technical Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600">Create dynamic simulation of UC-Main campus environment</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600">Implement adaptive evacuation routes with real-time response</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600">Integrate gamification for enhanced learning and retention</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-red-600">
              <CardHeader>
                <CardTitle className="text-xl">Feature Definition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600">Define immersive and interactive simulation capabilities</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600">Establish adaptive features for personalized learning</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600">Optimize user experience for maximum engagement</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-red-600">
              <CardHeader>
                <CardTitle className="text-xl">Evaluation & Acceptance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600">Measure acceptability among UC-Main students and staff</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600">Assess effectiveness in improving emergency preparedness</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600">Gather feedback for continuous system improvement</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Emergency Preparedness?
          </h2>
          <p className="text-xl text-red-50 mb-8">
            Join UC-Main Campus in creating a safer, more prepared community through innovative simulation technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
              Start Training Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Research Team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-12">
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
    </div>
  );
}