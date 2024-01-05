import ReviewsSection from "@/components/ReviewsSection/ReviewsSection";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import GuidesSection from "@/components/GuidesSection/GuidesSection";
import Upcoming from "@/components/Upcoming/Upcoming";
import TermsSection from "@/components/TermsSection/TermsSection";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Gear from "@/components/Gear/Gear";
import InstaFeed from "@/components/InstaFeed/InstaFeed";
import Hero from "@/components/Hero/Hero";

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
      <ReviewsSection blogData={blogs} />
      <FeaturedSection blogData={blogs} />
      <GuidesSection blogData={blogs} />
      <Upcoming blogData={blogs} />
      <Gear />
      <TermsSection />
      <InstaFeed />
      <FinalCTA />
    </main>
  );
}
