import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Hero.module.css";

import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.container}>
          <div className={styles.imgOverlay}></div>
          <video preload='auto' autoPlay muted loop className={styles.video}>
            <source src='./videos/video2.mp4' />
          </video>
          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.heading}>
                arizona stay and play golf packages
              </h1>
              <p className={styles.copy}>
                Book your next golf vacation with us! Explore top packages and
                destinations. Contact us or request a quote to get started.
              </p>
              <div className={styles.searchContainer}>
                {/* <Search /> */}
                <div className={styles.btnContainer}>
                  <Button
                    btnType='primary'
                    text='Explore Packages'
                    href='/'
                    iconColor='white'
                  />
                  <Button
                    btnType='primaryii'
                    text='Book Now'
                    href='/'
                    iconColor='green'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
