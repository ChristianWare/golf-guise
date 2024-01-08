import BlogPreviewLarge from "@/components/BlogPreviewLarge/BlogPreviewLarge";
import ContentPadding from "@/components/ContentPadding/ContentPadding";
import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";
import PageIntro from "@/components/PageIntro/PageIntro";
import styles from "../../styles/ReviewsPage.module.css";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import InstaFeed from "@/components/InstaFeed/InstaFeed";
import TermsSection from "@/components/TermsSection/TermsSection";
import Gear from "@/components/Gear/Gear";
import BlogPreviewSmall from "@/components/BlogPreviewSmall/BlogPreviewSmall";

export default function GuidesPage() {
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");

  const blogsDirectory = path.join(process.cwd(), "blogs");
  const files = fs.readdirSync(blogsDirectory);

  const guidesBlogs = files
    .filter((filename: any) => filename.endsWith(".mdx"))
    .map((filename: any) => {
      const fileContent = fs.readFileSync(
        path.join(blogsDirectory, filename),
        "utf-8"
      );

      const { data: frontMatter } = matter(fileContent);

      if (frontMatter.category === "guides") {
        return {
          meta: frontMatter,
          slug: filename.replace(".mdx", ""),
        };
      }

      return null;
    })
    .filter(Boolean);

  return (
    <main>
      <PageIntro
        heading='Guides'
        copy='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                ex aliquid, repudiandae non illo quibusdam?'
        color='blue'
      />
      <LayoutWrapper>
        <ContentPadding>
          {guidesBlogs.slice(0, 1).map((x: any, index: number) => (
            <div key={index}>
              <BlogPreviewLarge key={index} mapData={x} />
            </div>
          ))}
          <div className={styles.bottomii}>
            {guidesBlogs.slice(1, 10).map((x: any, index: number) => (
              <div key={index}>
                <BlogPreviewSmall key={index} mapData={x} />
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
