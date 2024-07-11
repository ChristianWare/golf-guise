import PackageHero from "@/components/PackageHero/PackageHero";
import Featured from "@/components/Featured/Featured";
import ImageGrid from "@/components/ImageGrid/ImageGrid";
import Faqsiii from "@/components/Faqsiii/Faqsiii";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import ContactForm from "@/components/ContactForm/ContactForm";
import IndividualPackage from "@/components/IndividualPackage/IndividualPackage";
import Section from "@/components/IndividualPackage/Section";

export default function page() {
  return (
    <main>
      <PackageHero />
      <Featured />
      <Section />
      <ImageGrid />
      <Faqsiii />
      <FinalCTA />
      <ContactForm />
    </main>
  );
}
