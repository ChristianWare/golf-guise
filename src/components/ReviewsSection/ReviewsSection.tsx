import { FC } from "react";
import { BlogData, BlogSectionProps } from "@/lib/interface";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./ReviewsSection.module.css";
import BlogPreviewLarge from "../BlogPreviewLarge/BlogPreviewLarge";
import BlogPreviewMedium from "../BlogPreviewMedium/BlogPreviewMedium";
import BlogPreviewSmall from "../BlogPreviewSmall/BlogPreviewSmall";
import Button from "../Button/Button";

const Reviews: FC<BlogSectionProps> = ({ blogData }) => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <h2 className={styles.heading}>Our Packages</h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.leftTop}>
                {blogData.slice(0, 1).map((x: BlogData, index: number) => (
                  <BlogPreviewLarge key={index} mapData={x} />
                ))}
              </div>
              <div className={styles.leftBottom}>
                {blogData.slice(1, 3).map((x: BlogData, index: number) => (
                  <BlogPreviewSmall
                    key={index}
                    mapData={x}
                    column='column'
                    imgCol='imgCol'
                    colPadding='colPadding'
                  />
                ))}
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.rightTop}>
                {blogData.slice(3, 5).map((x: BlogData, index: number) => (
                  <BlogPreviewMedium key={index} mapData={x} />
                ))}
              </div>
              <div className={styles.rightBottom}>
                <h3 className={styles.heading2}>
                  every post is a strategic swing toward unlocking your full
                  potential on the course
                </h3>
              </div>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Button btnType='primary' text='see all reviews' href='/reviews' />
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Reviews;
