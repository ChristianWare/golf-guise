import { FC } from "react";
import { BlogData, BlogSectionProps } from "@/lib/interface";
import BlogPreviewLarge from "../BlogPreviewLarge/BlogPreviewLarge";
import BlogPreviewSmall from "../BlogPreviewSmall/BlogPreviewSmall";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./FeaturedSection.module.css";
import ContentPadding from "../ContentPadding/ContentPadding";
import BlogPreviewMedium from "../BlogPreviewMedium/BlogPreviewMedium";

const Featured: FC<BlogSectionProps> = ({ blogData }) => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <h2 className={styles.heading}>Featured Articles</h2>
          <div className={styles.top}></div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.leftTop}>
                {blogData.slice(0, 1).map((x: BlogData, index: number) => (
                  <BlogPreviewLarge key={index} mapData={x}  />
                ))}
              </div>
              <div className={styles.leftBottom}>
                {blogData.slice(0, 4).map((x: BlogData, index: number) => (
                  <BlogPreviewMedium key={index} mapData={x}  />
                ))}
              </div>
              <div className={styles.leftCTA}>
                <h2 className={styles.ctaHeading}>
                  Get Prospector&#39;s Picks, the 5 minute weekly email used by
                  +43,000 investors.
                </h2>
              </div>
            </div>
            <div className={styles.right}>
              <h2 className={styles.heading3}>Latest</h2>
              {blogData.map((x: BlogData, index: number) => (
                <BlogPreviewSmall key={index} mapData={x}  />
              ))}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Featured;
