import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./GlossarySlugPage.module.css";
import SlugImage from "@/components/SlugImage/SlugImage";
import SlugHeading from "@/components/SlugHeading/SlugHeading";
import SlugConclusion from "@/components/SlugConclusion/SlugConclusion";
import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";
import ContentPadding from "@/components/ContentPadding/ContentPadding";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import SlugIntro from "@/components/SlugIntro/SlugIntro";
import GlossarySlugIntro from "@/components/GlossarySlugIntro/GlossarySlugIntro";
import { glossaryMenu } from "@/lib/data";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("glossary"));

  const paths = files.map((filename) => {
    slug: filename.replace(".mdx", "");
  });

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("glossary", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);
  return {
    frontMatter,
    slug,
    content,
  };
}

const glossaryDirectory = path.join(process.cwd(), "glossary");
const files = fs.readdirSync(glossaryDirectory);

const glossary = files.map((filename: any) => {
  const fileContent = fs.readFileSync(
    path.join(glossaryDirectory, filename),
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

export default function Page({ params }: any) {
  const props = getPost(params);

  const selectedLetter = props.slug.charAt(0).toUpperCase();

  return (
    <main>
      <GlossarySlugIntro
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
            <div className={styles.farRight}>
              <div className={styles.tocContainer}>
                <span className={styles.tocHeadingTitle}>Similar Words</span>
                {glossaryMenu
                  .filter(
                    (x) =>
                      x.letter.toUpperCase() === selectedLetter.toUpperCase()
                  )
                  .map((x: any, index: number) => (
                    <div key={index}>
                      {x.section.map((y: any, index: number) => (
                        <div key={index}>
                          <p className={styles.heading}>{y.term}</p>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
      <FinalCTA />
    </main>
  );
}
