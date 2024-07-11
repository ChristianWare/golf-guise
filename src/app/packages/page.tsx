import PackageHero from "@/components/PackageHero/PackageHero";
import Featured from "@/components/Featured/Featured";
import ImageGrid from "@/components/ImageGrid/ImageGrid";
import Faqsiii from "@/components/Faqsiii/Faqsiii";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function page() {
  return (
    <main>
      <PackageHero />
      <Featured />
      <ImageGrid />
      <Faqsiii />
      <FinalCTA />
      <ContactForm />
    </main>
  );
}
