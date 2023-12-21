import styles from "./BlogPreviewSmall.module.css";
import Link from "next/link";
import { BlogPreviewProps } from "@/lib/interface";
import { FC } from "react";

const BlogPreviewSmall: FC<BlogPreviewProps> = ({ mapData, key }) => {
  return (
    <article key={key} className={styles.container}>
      <span className={styles.category}>CATEGORY</span>
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
