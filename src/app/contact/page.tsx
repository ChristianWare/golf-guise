import ContactDetails from "@/components/ContactDetails/ContactDetails";
import ContactForm from "@/components/ContactForm/ContactForm";
import Faqsiii from "@/components/Faqsiii/Faqsiii";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import PageIntro from "@/components/PageIntro/PageIntro";

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        heading='Contact Us'
        copy='Get in Touch with AZ Golf Whisperers'
        videoSrc='./videos/video9.mp4'
        textAlign='center'
      />
      <ContactDetails />
      <Faqsiii />
      <FinalCTA />
    </main>
  );
}
