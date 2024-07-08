import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Search from "../Search/Search";
import styles from "./Hero.module.css";
import Instagram from "../../../public/icons/instagram.svg";
import Facebook from "../../../public/icons/facebook.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import T2 from "../../../public/icons/twitterii.svg";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section>
      <LayoutWrapper>
        <ContentPadding>
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
                    <Button btnType='primary' text='Current Offers' href='/' />
                    <Button
                      btnType='primaryii'
                      text='Contact Us'
                      href='/'
                      iconColor='gray'
                    />
                  </div>
                  <div className={styles.socialsContainer}>
                    <div className={styles.iconContainer}>
                      <Instagram
                        className={styles.icon}
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className={styles.iconContainer}>
                      <Facebook
                        className={styles.icon}
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className={styles.iconContainer}>
                      <T2 className={styles.icon} width={20} height={20} />
                    </div>
                    <div className={styles.iconContainer}>
                      <LinkedIn
                        className={styles.icon}
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
