import { Navigation } from "@/components/molecules/Navigation";
import { Footer } from "@/components/organisms/Footer";
import { ProductHero } from "@/components/organisms/ProductHero";
import { ProductFeatures } from "@/components/organisms/ProductFeatures";
import { Product3D } from "@/components/organisms/Product3D";

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ProductHero />
      <ProductFeatures />
      <Product3D />
      <Footer />
    </main>
  );
}