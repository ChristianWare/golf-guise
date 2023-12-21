import { FC } from "react";
import { BlogData, BlogSectionProps } from "@/lib/interface";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./ReviewsSection.module.css";
import BlogPreviewLarge from "../BlogPreviewLarge/BlogPreviewLarge";

const Reviews: FC<BlogSectionProps> = ({ blogData }) => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <h2 className={styles.heading}>Reviews</h2>
            <p className={styles.copy}>
              Our latest reviews from golf analysts around the world
            </p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              {blogData.slice(0, 3).map((x: BlogData, index: number) => (
                <BlogPreviewLarge
                  key={index}
                  mapData={x}
                  column='column'
                  colImg='colImg'
                  imgCol='imgCol'
                  colPadding='colPadding'
                  colTitle='colTitle'
                />
              ))}
            </div>
            <div className={styles.right}></div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Reviews;
