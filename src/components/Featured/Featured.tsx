import { FC } from "react";
import BlogPreviewLarge from "../BlogPreviewLarge/BlogPreviewLarge";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Featured.module.css";
import { BlogData, BlogSectionProps } from "@/lib/interface";
import ContentPadding from "../ContentPadding/ContentPadding";

const Featured: FC<BlogSectionProps> = ({ blogData }) => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <h2 className={styles.heading}>Featured</h2>
              {blogData.slice(0, 1).map((x: BlogData, index: number) => (
                <BlogPreviewLarge key={index} mapData={x} />
              ))}
            </div>
            <div className={styles.right}>
              <h2 className={styles.heading}>Latest</h2>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Featured;
