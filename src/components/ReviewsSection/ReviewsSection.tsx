import { FC } from "react";
import { BlogData, BlogSectionProps } from "@/lib/interface";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./ReviewsSection.module.css";
import BlogPreviewLarge from "../BlogPreviewLarge/BlogPreviewLarge";
import BlogPreviewMedium from "../BlogPreviewMedium/BlogPreviewMedium";

const Reviews: FC<BlogSectionProps> = ({ blogData }) => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <h2 className={styles.heading}>Reviews</h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              {blogData.slice(0, 1).map((x: BlogData, index: number) => (
                <BlogPreviewLarge
                  key={index}
                  mapData={x}
                  column='column'
                  imgCol='imgCol'
                  colPadding='colPadding'
                />
              ))}
            </div>
            <div className={styles.right}>
              {blogData.slice(0, 3).map((x: BlogData, index: number) => (
                <BlogPreviewMedium key={index} mapData={x} />
              ))}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Reviews;
