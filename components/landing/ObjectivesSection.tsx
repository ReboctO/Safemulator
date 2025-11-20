"use client"
import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ObjectivesSection() {
  return (
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
  );
}