import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./FinalCTA.module.css";

const FinalCTA = () => {
  return (
    <LayoutWrapper>
      <section className={styles.container}>
        <h2 className={styles.heading}>
          Discover Unforgettable Golf Vacations in Arizona
        </h2>
        <p className={styles.copy}>
          Experience world-class golf courses with our tailored vacation
          packages.
        </p>
        <div className={styles.btnContainer}>
          <Button
            btnType='primaryiii'
            text='Current Offers'
            href='/'
            iconColor='white'
          />
          <Button
            btnType='primaryii'
            text='Contact Us'
            href='/'
            iconColor='green'
          />
        </div>
      </section>
    </LayoutWrapper>
  );
};
export default FinalCTA;
