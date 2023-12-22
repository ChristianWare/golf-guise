import Image from "next/image";
import Img from "../../../public/images/img1.png";
import Link from "next/link";
import styles from "./BlogPreviewMedium.module.css";
import { BlogPreviewProps } from "@/lib/interface";
import { FC } from "react";

const BlogPreviewMedium: FC<BlogPreviewProps> = ({
  mapData,
  key,
  featured,
  guide,
  review,
}) => {
  return (
    <article key={key} className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={Img} alt='image' fill className={styles.img} />
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.tagsContainer}>
          {featured && <span className={styles.featured}>FEATURED</span>}
          {guide && <span className={styles.guide}>GUIDE</span>}
          {review && <span className={styles.review}>REVIEW</span>}
          <span className={styles.category}>Category</span>
        </span>

        <Link href={`/blog/${mapData.slug}`} passHref>
          <h2 className={styles.title}>{mapData.meta.title}</h2>
        </Link>
        <time dateTime='2023-02-02' className={styles.date}>
          {mapData.meta.date}
        </time>
      </div>
    </article>
  );
};
export default BlogPreviewMedium;
