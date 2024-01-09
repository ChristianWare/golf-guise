import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "../../../styles/SlugPage.module.css";
import SlugImage from "@/components/SlugImage/SlugImage";
import SlugHeading from "@/components/SlugHeading/SlugHeading";
import SlugConclusion from "@/components/SlugConclusion/SlugConclusion";
import { BlogData } from "@/lib/interface";
import BlogPreview from "@/components/BlogPreview/BlogPreview";
import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";
import ContentPadding from "@/components/ContentPadding/ContentPadding";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import SlugIntro from "@/components/SlugIntro/SlugIntro";
import BlogPreviewSmall from "@/components/BlogPreviewSmall/BlogPreviewSmall";
import { Metadata } from "next";

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title: 
//   }
// }

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => {
    slug: filename.replace(".mdx", "");
  });

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("blogs", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);
  return {
    frontMatter,
    slug,
    content,
  };
}

const blogsDirectory = path.join(process.cwd(), "blogs");
const files = fs.readdirSync(blogsDirectory);

const blogs = files.map((filename: any) => {
  const fileContent = fs.readFileSync(
    path.join(blogsDirectory, filename),
    "utf-8"
  );

  const { data: frontMatter } = matter(fileContent);

  const meta = {
    category: frontMatter.category,
    thumbnaillUrl: frontMatter.thumbnaillUrl,
    date: frontMatter.date,
    readingTime: frontMatter.readingTime,
    title: frontMatter.title,
    description: frontMatter.description,
  };

  return {
    meta,
    slug: filename.replace(".mdx", ""),
  };
});

const components = { SlugImage, SlugHeading, SlugConclusion };

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { frontMatter } = getPost(params);

  return {
    title: frontMatter.title,
    description: frontMatter.description,
  };
}


export default function Page({ params }: any) {
  const props = getPost(params);

  return (
    <main>
      <SlugIntro
        heading={props.frontMatter.title}
        description={props.frontMatter.description}
        date={props.frontMatter.date}
        category={props.frontMatter.category}
      />
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.container}>
            <div className={styles.left}>
              <div className={styles.tocContainer}>
                <span className={styles.tocHeadingTitle}>In This Article</span>
                {props.frontMatter.toc.map((x: any, index: number) => (
                  <div key={index}>
                    <p className={styles.heading}>{x.heading}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.mdxContent}>
              <MDXRemote source={props.content} components={components} />
            </div>
            <div className={styles.right}>
              <h4 className={styles.headingTitle}>You May Also Like</h4>
              {blogs
                .filter((y: any) => y.meta.category === "reviews")
                .slice(0, 2)
                .map((x: any, index: number) => (
                  <div key={index} className={styles.previewContainer}>
                    <BlogPreviewSmall key={index} mapData={x} />
                  </div>
                ))}
            </div>
          </div>
          <h2 className={styles.relatedArticlesHeading}>Related Articles</h2>
          <div className={styles.relatedArticles}>
            {blogs.filter((y: any) => y.meta.category === "reviews").slice(0, 3).map((x: BlogData, index: number) => (
              <BlogPreview key={index} mapData={x} />
            ))}
          </div>
        </ContentPadding>
      </LayoutWrapper>
      <FinalCTA />
    </main>
  );
}
