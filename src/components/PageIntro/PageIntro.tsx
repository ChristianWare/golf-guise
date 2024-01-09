import Button from "../Button/Button";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Search from "../Search/Search";
import styles from "./PageIntro.module.css";
import { FC } from "react";

interface Props {
  heading: string;
  copy: string;
  center?: string;
  color?: string;
  textColor?: string;
  searchBox?: boolean;
}

const PageIntro: FC<Props> = ({
  heading,
  copy,
  center = "",
  color = "",
  textColor = "",
  searchBox,
}) => {
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
              {searchBox && (
                <div className={styles.searchContainer}>
                  <Search />
                  <div className={styles.btnContainer}>
                    <Button btnType='primary' text='Go back home' href='/' />
                    <Button btnType='primary' text='Reviews' href='/reviews' />
                    <Button btnType='primary' text='Guides' href='/guides' />
                  </div>
                </div>
              )}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default PageIntro;
