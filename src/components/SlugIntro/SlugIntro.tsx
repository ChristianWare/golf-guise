import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./SlugIntro.module.css";
import { FC } from "react";
import Image from "next/image";
import Img from "../../../public/images/img1.png";

interface Props {
  heading: string;
  description: string;
  date: string;
  category: string;
}

const SlugIntro: FC<Props> = ({ heading, description, date, category }) => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.heading}>{heading}</h1>
              <p className={styles.copy}>{description}</p>
              <div className={styles.box}>
                <span className={styles.spanHeading}>Published</span>
                <span className={styles.span}>{date}</span>
              </div>
              <div className={styles.box}>
                <span className={styles.spanHeading}>Category</span>
                <span className={styles.span}>{category}</span>
              </div>
              <div className={styles.box}>
                <span className={styles.spanHeading}>Share</span>
                <span className={styles.shareContainer}>icons here </span>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.imgContainer}>
                <Image src={Img} alt='image' fill className={styles.img} />
              </div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default SlugIntro;
