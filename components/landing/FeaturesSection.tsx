"use client"
import { Map, Gamepad2, TrendingUp, Users, CheckCircle, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FeaturesSection() {
  const features = [
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
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Key Features</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            SafeMulator combines immersive technology with practical safety training to create an effective learning experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
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
  );
}
