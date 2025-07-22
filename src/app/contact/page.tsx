import { ContactHero } from "@/components/organisms/ContactHero";
import { ContactForm } from "@/components/organisms/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactForm />
    </main>
  );
}
