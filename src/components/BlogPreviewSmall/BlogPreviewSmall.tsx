import styles from "./BlogPreviewSmall.module.css";
import Link from "next/link";
import Image from "next/image";
import Img from "../../../public/images/img1.png";
import { BlogPreviewProps } from "@/lib/interface";
import { FC } from "react";
import Button from "../Button/Button";

const BlogPreviewSmall: FC<BlogPreviewProps> = ({ mapData, key, featured }) => {
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
          <span
            className={`${styles[mapData?.meta?.category]} ${styles.category}`}
          >
            {mapData.meta.category}
          </span>
        </span>
        <Link href={`/${mapData.meta.category}/${mapData.slug}`} passHref>
          <h2 className={styles.title}>{mapData.meta.title}</h2>
        </Link>
        <div className={styles.btnContainer}>
          <Button btnType='primary' text='Explore Package' href='/' />
        </div>
      </div>
    </article>
  );
};
export default BlogPreviewSmall;
