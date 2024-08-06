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
        copy="Sorry, the page you're looking for doesn't exist or has been removed. Please go back tot the home page."
        textAlign='center'
        videoSrc='./videos/video8.mp4'
        btns={true}
      />
      <FinalCTA />
    </main>
  );
};
export default NotFound;
