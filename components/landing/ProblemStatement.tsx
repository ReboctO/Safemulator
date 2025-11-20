"use client"
import { AlertTriangle, Map, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProblemStatement() {
  return (
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
  );
}