import BlogPreviewSmall from "../BlogPreviewSmall/BlogPreviewSmall";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Upcoming.module.css";
import { FC } from "react";
import { BlogData, BlogSectionProps } from "@/lib/interface";

const Upcoming: FC<BlogSectionProps> = ({ blogData }) => {
  return (
    <section className={styles.article}>
      <LayoutWrapper>
          <div className={styles.top}>
            <h2 className={styles.heading}>Upcoming Articles</h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <h3 className={styles.heading2}>to be released this month ...</h3>
            </div>
            <div className={styles.right}>
              {blogData.slice(0,5).map((x: BlogData, index: number) => (
                <BlogPreviewSmall key={index} mapData={x} />
              ))}
            </div>
          </div>
      </LayoutWrapper>
    </section>
  );
};
export default Upcoming;
