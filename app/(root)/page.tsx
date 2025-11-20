// app/page.tsx
import Navigation from '@/components/landing/Navigation';
import HeroSection from '@/components/landing/HeroSection';
import ProblemStatement from '@/components/landing/ProblemStatement';
import FeaturesSection from '@/components/landing/FeaturesSection';
import ObjectivesSection from '@/components/landing/ObjectivesSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function SafeMulatorLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      <HeroSection />
      <ProblemStatement />
      <FeaturesSection />
      <ObjectivesSection />
      <CTASection />
      <Footer />
    </div>
  );
}