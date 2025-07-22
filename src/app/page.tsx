import { Hero } from "@/components/organisms/Hero";
import { HowItWorks } from "@/components/organisms/HowItWorks";
import { FeaturesGrid } from "@/components/organisms/FeaturesGrid";
import { PricingSection } from "@/components/organisms/PricingSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <FeaturesGrid />
      <PricingSection />
    </div>
  );
}
