import ContactForm from "@/components/ContactForm/ContactForm";
import Faqsiii from "@/components/Faqsiii/Faqsiii";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import PageIntro from "@/components/PageIntro/PageIntro";
import ScrollText from "@/components/ScrollText/ScrollText";
import TermsSection from "@/components/TermsSection/TermsSection";
import Usp from "@/components/Usp/Usp";
import Values from "@/components/Values/Values";

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        heading='About Us'
        copy=' Book your next golf vacation with us! Explore top packages and
                  destinations. Contact us or request a quote to get started.'
        videoSrc='./videos/video7.mp4'
      />
      <ScrollText />
      <Values />
      <Usp />
      <TermsSection />
      <Faqsiii />
      <FinalCTA />
      <ContactForm />
    </main>
  );
}
