
"use client"
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
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
  );
}
