import { FC } from "react";
import BlogPreviewLarge from "../BlogPreviewLarge/BlogPreviewLarge";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Featured.module.css";
import { BlogData, BlogSectionProps } from "@/lib/interface";

const Featured: FC<BlogSectionProps> =({ blogData }) => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <h2 className={styles.heading}>Featured</h2>
        <div className={styles.bottom}>
          {blogData.map((x: BlogData, index: number) => (
            <BlogPreviewLarge key={index} mapData={x} />
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Featured;
