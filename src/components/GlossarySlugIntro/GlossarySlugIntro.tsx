import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./GlossarySlugIntro.module.css";
import { FC } from "react";
import Image from "next/image";
import Img from "../../../public/images/img1.png";
import Instagram from "../../../public/icons/instagram.svg";
import Facebook from "../../../public/icons/facebook.svg";
import Twitter from "../../../public/icons/twitter.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";

interface Props {
  heading: string;
  description: string;
  date: string;
  category: string;
}

const GlossarySlugIntro: FC<Props> = ({
  heading,
  description,
  date,
  category,
}) => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.heading}>{heading}</h1>
              <p className={styles.copy}>{description}</p>
              {/* <div className={styles.box}>
                <span className={styles.spanHeading}>Published</span>
                <span className={styles.span}>{date}</span>
              </div>
              <div className={styles.box}>
                <span className={styles.spanHeading}>Category</span>
                <span className={styles.span}>{category}</span>
              </div> */}
              {/* <div className={styles.box}>
                <span className={styles.spanHeading}>Share</span>
                <div className={styles.socialsContainer}>
                  <div className={styles.iconContainer}>
                    <Instagram className={styles.icon} width={15} height={15} />
                  </div>
                  <div className={styles.iconContainer}>
                    <Facebook className={styles.icon} width={15} height={15} />
                  </div>
                  <div className={styles.iconContainer}>
                    <Twitter className={styles.icon} width={15} height={15} />
                  </div>
                  <div className={styles.iconContainer}>
                    <LinkedIn className={styles.icon} width={15} height={15} />
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div className={styles.right}>
              <div className={styles.imgContainer}>
                <Image src={Img} alt='image' fill className={styles.img} />
              </div>
            </div> */}
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default GlossarySlugIntro;
