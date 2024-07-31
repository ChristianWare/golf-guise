import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./ScrollText.module.css";

const ScrollText = () => {
  return (
    <section className={styles.bgColor}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.reveal}>
            <h2 className={styles.text}>
              AZ Golf Whisperers is dedicated to providing exceptional golf
              vacation experiences in Arizona. Our passion for golf and
              commitment to excellence drive us to create unforgettable trips
              tailored to your needs.
            </h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.houseContainer}>
              
            </div>
            <p className={styles.copy}>
              Indulge in the ultimate golf vacation with our Luxury Golf Retreat
              package. Enjoy five-star accommodations, gourmet dining, and play
              at the top-rated courses in Arizona.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ScrollText;
