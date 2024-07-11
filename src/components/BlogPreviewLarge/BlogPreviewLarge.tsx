import { BlogPreviewProps } from "@/lib/interface";
import { FC } from "react";
import styles from "./BlogPreviewLarge.module.css";
import Image from "next/image";
import Img from "../../../public/images/img1.png";
import Link from "next/link";
import Button from "../Button/Button";

const BlogPreviewLarge: FC<BlogPreviewProps> = ({
  mapData,
  key,
  featured,
  column = "",
  imgCol = "",
  colPadding = "",
  colTitle = "",
  colImg = "",
}) => {
  return (
    <article key={key} className={`${styles.container} ${styles[column]}`}>
      <div className={styles.left}>
        <div className={`${styles.imgContainer} ${styles[colImg]}`}>
          <Link href={`/${mapData.meta.category}/${mapData.slug}`} passHref>
            <Image
              src={Img}
              alt='image'
              fill
              className={`${styles.img} ${styles[imgCol]}`}
            />
          </Link>
        </div>
      </div>
      <div className={`${styles.right} ${styles[colPadding]}`}>
        <span className={styles.tagsContainer}>
          {featured && <span className={styles.featured}>FEATURED</span>}
          <span
            className={`${styles[mapData?.meta?.category]} ${styles.category}`}
          >
            {mapData.meta.category}
          </span>
        </span>

        <Link href={`/${mapData.meta.category}/${mapData.slug}`} passHref>
          <h2 className={`${styles.title} ${styles[colTitle]}`}>
            {mapData.meta.title}
          </h2>
        </Link>
        <p>(Comming soon...)</p>
        <p className={styles.desc}>{mapData.meta.description}</p>
        {/* <div className={styles.btnContainer}>
          <Button btnType='primary' text='Explore Package' href='/' />
        </div> */}
      </div>
    </article>
  );
};
export default BlogPreviewLarge;
