import { Navigation } from "@/components/molecules/Navigation";
import { Footer } from "@/components/organisms/Footer";
import { PricingHero } from "@/components/organisms/PricingHero";

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PricingHero />
      <Footer />
    </main>
  );
}