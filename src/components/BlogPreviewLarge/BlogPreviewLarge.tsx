import { BlogPreviewProps } from "@/lib/interface";
import { FC } from "react";
import styles from "./BlogPreviewLarge.module.css";
import Image from "next/image";
import Img from "../../../public/images/img1.png";
import Link from "next/link";

const BlogPreviewLarge: FC<BlogPreviewProps> = ({
  mapData,
  key,
  featured,
  column = "",
  imgCol = "",
  colPadding = "",
  colTitle = "",
  colImg = "",
  guide,
  review,
}) => {
  return (
    <article key={key} className={`${styles.container} ${styles[column]}`}>
      <div className={styles.left}>
        <div className={`${styles.imgContainer} ${styles[colImg]}`}>
          <Image
            src={Img}
            alt='image'
            fill
            className={`${styles.img} ${styles[imgCol]}`}
          />
        </div>
      </div>
      <div className={`${styles.right} ${styles[colPadding]}`}>
        <span className={styles.tagsContainer}>
          {featured && <span className={styles.featured}>FEATURED</span>}
          {guide && <span className={styles.guide}>GUIDE</span>}
          {review && <span className={styles.review}>GUIDE</span>}
          <span className={styles.category}>{mapData.meta.category}</span>
        </span>

        <Link href={`/${mapData.meta.category}/${mapData.slug}`} passHref>
          <h2 className={`${styles.title} ${styles[colTitle]}`}>
            {mapData.meta.title}
          </h2>
          <p className={styles.desc}>{mapData.meta.description}</p>
        </Link>
        <time dateTime='2023-02-02' className={styles.date}>
          {mapData.meta.date}
        </time>
      </div>
    </article>
  );
};
export default BlogPreviewLarge;
