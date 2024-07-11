import Button from "../Button/Button";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./PackageHero.module.css";

const PackageHero = () => {
  return (
    <section>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.container}>
            <div className={styles.imgOverlay}></div>
            <video preload='auto' autoPlay muted loop className={styles.video}>
              <source src='./videos/video3.mp4' />
            </video>
            <div className={styles.content}>
              <div className={styles.left}>
                <h1 className={styles.heading}>Our Golf Package Details</h1>
                <p className={styles.copy}>
                  Book your next golf vacation with us! Explore top packages and
                  destinations. Contact us or request a quote to get started.
                </p>
              </div>
              <div className={styles.searchContainer}></div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default PackageHero;
