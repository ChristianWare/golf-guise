import styles from "./BlogPreviewSmall.module.css";
import Link from "next/link";
import { BlogPreviewProps } from "@/lib/interface";
import { FC } from "react";

const BlogPreviewSmall: FC<BlogPreviewProps> = ({
  mapData,
  key,
  featured,
  guide,
  review,
}) => {
  return (
    <article key={key} className={styles.container}>
      <span className={styles.tagsContainer}>
        {featured && <span className={styles.featured}>FEATURED</span>}
        {guide && <span className={styles.guide}>GUIDE</span>}
        {review && <span className={styles.review}>GUIDE</span>}
        <span className={styles.category}>5 MIN READ</span>
      </span>
      <Link href={`/blog/${mapData.slug}`} passHref>
        <h2 className={styles.title}>{mapData.meta.title}</h2>
      </Link>
      <time dateTime='2023-02-02' className={styles.date}>
        {mapData.meta.date}
      </time>
    </article>
  );
};
export default BlogPreviewSmall;
