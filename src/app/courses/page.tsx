import ContactForm from "@/components/ContactForm/ContactForm";
import CourseCollection from "@/components/CourseCollection/CourseCollection";
import Faqsiii from "@/components/Faqsiii/Faqsiii";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Gallery from "@/components/Gallery/Gallery";
import Mission from "@/components/Mission/Mission";
import PageIntro from "@/components/PageIntro/PageIntro";
import TermsSection from "@/components/TermsSection/TermsSection";

export default function CoursesPage() {
  return (
    <main>
      <PageIntro
        heading='Our Courses'
        copy='Here are some of our best courses that are included in the packages we have to offer.'
        videoSrc='./videos/video6.mp4'
        textAlign='center'
      />
      <CourseCollection />
      <Mission />
      <Gallery />
      <TermsSection />
      <Faqsiii />
      <FinalCTA />
    </main>
  );
}
