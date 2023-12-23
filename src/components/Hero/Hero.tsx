import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Search from "../Search/Search";
import styles from "./Hero.module.css";
import Instagram from "../../../public/icons/instagram.svg";
import Facebook from "../../../public/icons/facebook.svg";
import Twitter from "../../../public/icons/twitter.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";

const Hero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <h1 className={styles.heading}>golf guise</h1>
            <div className={styles.searchContainer}>
              <Search />
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
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
