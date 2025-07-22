import { Navigation } from "@/components/molecules/Navigation";
import { Footer } from "@/components/organisms/Footer";
import { ContactHero } from "@/components/organisms/ContactHero";
import { ContactForm } from "@/components/organisms/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  );
}