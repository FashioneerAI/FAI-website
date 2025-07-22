import { Navigation } from "@/components/molecules/Navigation";
import { Footer } from "@/components/organisms/Footer";
import { PricingHero } from "@/components/organisms/PricingHero";
import { PricingComparison } from "@/components/organisms/PricingComparison";
import { PricingFAQ } from "@/components/organisms/PricingFAQ";

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PricingHero />
      <PricingComparison />
      <PricingFAQ />
      <Footer />
    </main>
  );
}