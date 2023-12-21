import { FC } from "react";
import BlogPreviewLarge from "../BlogPreviewLarge/BlogPreviewLarge";
import BlogPreviewSmall from "../BlogPreviewSmall/BlogPreviewSmall";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Featured.module.css";
import { BlogData, BlogSectionProps } from "@/lib/interface";
import ContentPadding from "../ContentPadding/ContentPadding";
import BlogPreviewMedium from "../BlogPreviewMedium/BlogPreviewMedium";

const Featured: FC<BlogSectionProps> = ({ blogData }) => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <h2 className={styles.heading}>Featured</h2>
            <h2 className={styles.heading2}>Latest</h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.leftTop}>
                {blogData.slice(0, 1).map((x: BlogData, index: number) => (
                  <BlogPreviewLarge key={index} mapData={x} />
                ))}
              </div>
              <div className={styles.leftBottom}>
                {blogData.slice(0, 4).map((x: BlogData, index: number) => (
                  <BlogPreviewMedium key={index} mapData={x} />
                ))}
              </div>
            </div>
            <div className={styles.right}>
              <h2 className={styles.heading3}>Latest</h2>
              {blogData.map((x: BlogData, index: number) => (
                <BlogPreviewSmall key={index} mapData={x} />
              ))}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Featured;
