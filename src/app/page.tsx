import ReviewsSection from "@/components/ReviewsSection/ReviewsSection";
import TermsSection from "@/components/TermsSection/TermsSection";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Gear from "@/components/Gear/Gear";
import InstaFeed from "@/components/InstaFeed/InstaFeed";
import Hero from "@/components/Hero/Hero";
import PostHero from "@/components/PostHero/PostHero";
import What from "@/components/What/What";
import ImageGrid from "@/components/ImageGrid/ImageGrid";
import Featured from "@/components/Featured/Featured";
import Faqsiii from "@/components/Faqsiii/Faqsiii";
import ContactForm from "@/components/ContactForm/ContactForm";
import Gallery from "@/components/Gallery/Gallery";
import FeaturedPackages from "@/components/FeaturedPackages/FeaturedPackages";

export default function Home() {
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");

  // Determine the correct path to the 'blogs' directory
  const blogsDirectory = path.join(process.cwd(), "blogs");

  // Use readdirSync to list files in the 'blogs' directory
  const files = fs.readdirSync(blogsDirectory);

  const blogs = files.map((filename: any) => {
    const fileContent = fs.readFileSync(
      path.join(blogsDirectory, filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <main>
      <Hero />
      <What />
      <Featured />
      <ImageGrid />
      {/* <Gallery /> */}

      {/* <PostHero />
      <Featured />
      <ImageGrid />
      <Gear />
      <Faqsiii />
      <TermsSection />
      <Gallery />
      <FinalCTA />
      <ContactForm /> */}
    </main>
  );
}
