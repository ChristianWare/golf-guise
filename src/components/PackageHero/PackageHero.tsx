import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Nav from "../Nav/Nav";
import styles from "./PackageHero.module.css";

const PackageHero = () => {
  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.container}>
          <div className={styles.imgOverlay}></div>
          <div className={styles.navContainer}>
            <Nav />
          </div>
          <video preload='auto' autoPlay muted loop className={styles.video}>
            <source src='./videos/video3.mp4' />
          </video>
          <div className={styles.content}>
            <div className={styles.blur}>
              <div className={styles.left}>
                <h1 className={styles.heading}>Our Golf Package Details</h1>
                <p className={styles.copy}>
                  Book your next golf vacation with us! Explore top packages and
                  destinations. Contact us or request a quote to get started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default PackageHero;
