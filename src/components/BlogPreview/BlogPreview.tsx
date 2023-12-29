import Image from "next/image";
import Img from "../../../public/images/img1.png";
import styles from "./BlogPreview.module.css";
import { FC } from "react";
import { BlogPreviewProps } from "@/lib/interface";
import Link from "next/link";

const BlogPreview: FC<BlogPreviewProps> = ({
  mapData,
  key,
  featured,
  guide,
  review,
}) => {
  return (
    <article key={key} className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={Img} alt='image' fill className={styles.img} />
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={styles.tagsContainer}>
          {featured && <span className={styles.featured}>FEATURED</span>}
          {guide && <span className={styles.guide}>GUIDE</span>}
          {review && <span className={styles.review}>GUIDE</span>}
          <span className={styles.category}>Category</span>
        </span>

        <Link href={`/${mapData.meta.category}/${mapData.slug}`} passHref>
          <h2 className={styles.title}>{mapData.meta.title}</h2>
          <p className={styles.desc}>{mapData.meta.description}</p>
        </Link>
        <time dateTime='2023-02-02' className={styles.date}>
          {mapData.meta.date}
        </time>
      </div>
    </article>
  );
};
export default BlogPreview;