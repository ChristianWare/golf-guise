import PageIntro from "@/components/PageIntro/PageIntro";
import Gear from "@/components/Gear/Gear";
import TermsSection from "@/components/TermsSection/TermsSection";
import InstaFeed from "@/components/InstaFeed/InstaFeed";
import FinalCTA from "@/components/FinalCTA/FinalCTA";

const NotFound = () => {
  return (
    <main>
      <PageIntro
        heading='404 Error'
        copy="Sorry, the page you're looking for doesn't exist or has been removed."
        textAlign='center'
      />
      <TermsSection />
      <FinalCTA />
    </main>
  );
};
export default NotFound;
