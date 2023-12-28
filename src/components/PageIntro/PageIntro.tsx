import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./PageIntro.module.css";
import { FC } from "react";

interface Props {
  heading: string;
  copy: string;
  center?: string;
}

const PageIntro: FC<Props> = ({ heading, copy, center = "" }) => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={`${styles.heading} ${styles[center]}`}>{heading}</h1>
              <p className={`${styles.copy} ${styles[center]}`}>{copy}</p>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default PageIntro;
