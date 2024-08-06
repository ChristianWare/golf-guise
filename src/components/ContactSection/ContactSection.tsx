import ContactForm from "../ContactForm/ContactForm";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.container}>
      {/* <LayoutWrapper> */}
      <div className={styles.bottom}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Contact Us</h2>
          <h3 className={styles.headingii}>
            Discover Unforgettable Golf Vacations in Arizona
          </h3>
          <p className={styles.copy}>
            Indulge in the ultimate golf vacation with our Luxury Golf Retreat
            package. Enjoy five-star accommodations, gourmet dining, and play at
            the top-rated courses in Arizona.
          </p>
        </div>
        <div className={styles.right}>
          <ContactForm />
        </div>
      </div>
      {/* </LayoutWrapper> */}
    </section>
  );
};
export default ContactSection;
