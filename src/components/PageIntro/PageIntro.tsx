import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./PageIntro.module.css";
import { FC } from "react";

interface Props {
  heading: string;
  copy: string;
  center?: string;
  color?: string
  textColor?: string
}

const PageIntro: FC<Props> = ({ heading, copy, center = "", color='', textColor=''}) => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={`${styles.content} ${styles[color]}`}>
            <div className={styles.left}>
              <h1
                className={`${styles.heading} ${styles[center]} ${styles[textColor]}`}
              >
                {heading}
              </h1>
              <p
                className={`${styles.copy} ${styles[center]} ${styles[textColor]}`}
              >
                {copy}
              </p>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default PageIntro;
