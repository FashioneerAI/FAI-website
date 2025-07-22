import { Navigation } from "@/components/molecules/Navigation";
import { Hero } from "@/components/organisms/Hero";
import { HowItWorks } from "@/components/organisms/HowItWorks";
import { FeaturesGrid } from "@/components/organisms/FeaturesGrid";
import { PricingSection } from "@/components/organisms/PricingSection";
import { Footer } from "@/components/organisms/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <HowItWorks />
      <FeaturesGrid />
      <PricingSection />
      <Footer />
    </main>
  );
}
