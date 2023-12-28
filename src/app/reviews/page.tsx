import BlogPreviewLarge from "@/components/BlogPreviewLarge/BlogPreviewLarge";
import ContentPadding from "@/components/ContentPadding/ContentPadding";
import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";
import PageIntro from "@/components/PageIntro/PageIntro";
import styles from "../../styles/ReviewsPage.module.css";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import InstaFeed from "@/components/InstaFeed/InstaFeed";
import TermsSection from "@/components/TermsSection/TermsSection";
import Gear from "@/components/Gear/Gear";
import BlogPreview from "@/components/BlogPreview/BlogPreview";

export default function ReviewsPage() {
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
      <PageIntro
        heading='Reviews'
        copy='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                ex aliquid, repudiandae non illo quibusdam?'
      />
      <LayoutWrapper>
        <ContentPadding>
          {blogs
            .filter((y: any) => y.meta.category === "guides")
            .slice(0, 1)
            .map((x: any, index: number) => (
              <div key={index}>
                <BlogPreviewLarge key={index} mapData={x} />
              </div>
            ))}
          <div className={styles.bottom}>
            {blogs
              .filter((y: any) => y.meta.category === "guides")
              .slice(1, 10)
              .map((x: any, index: number) => (
                <div key={index}>
                  <BlogPreview key={index} mapData={x} />
                </div>
              ))}
          </div>
        </ContentPadding>
      </LayoutWrapper>
      <Gear />
      <TermsSection />
      <InstaFeed />
      <FinalCTA />
    </main>
  );
}
