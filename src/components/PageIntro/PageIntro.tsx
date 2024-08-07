import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Nav from "../Nav/Nav";
import styles from "./PageIntro.module.css";
import { FC } from "react";

interface Props {
  heading: string;
  copy: string;
  textAlign?: string;
  color?: string;
  textColor?: string;
  videoSrc?: any;
  btns? :boolean;
}

const PageIntro: FC<Props> = ({
  heading,
  copy,
  textAlign = "",
  videoSrc,
  color = "",
  btns,
}) => {
  return (
    <LayoutWrapper>
      <section className={`${styles.container} ${styles[color]}`}>
        <div className={styles.container}>
          <div className={styles.imgOverlay}></div>
          <div className={styles.navContainer}>
            <Nav />
          </div>
          <video preload='auto' autoPlay muted loop className={styles.video}>
            <source src={videoSrc} />
          </video>
          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={`${styles.heading} ${styles[textAlign]}`}>
                {heading}{" "}
              </h1>{" "}
              <p className={`${styles.copy} ${styles[textAlign]}`}>{copy}</p>{" "}
              {btns && (
                <div className={styles.btnContainer}>
                  <Button
                    btnType='primary'
                    text='Home'
                    href='/'
                    iconColor='white'
                  />
                  <Button
                    btnType='primaryii'
                    text='Packages'
                    href='/'
                    iconColor='green'
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
};
export default PageIntro;
