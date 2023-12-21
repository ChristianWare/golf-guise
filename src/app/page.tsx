import ReviewsSection from "@/components/ReviewsSection/ReviewsSection";
import styles from "./page.module.css";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import GuidesSection from "@/components/GuidesSection/GuidesSection";

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
      <FeaturedSection blogData={blogs} />
      <ReviewsSection blogData={blogs} />
      <GuidesSection blogData={blogs} />
    </main>
  );
}
