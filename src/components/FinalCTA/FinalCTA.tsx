import Button from "../Button/Button";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./FinalCTA.module.css";

const FinalCTA = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <section className={styles.container}>
          <h2 className={styles.heading}>Treat your travel to cheap flights</h2>
          <p className={styles.copy}>
            Sign up for free to start getting flight alerts. Or upgrade to get
            4x the deals, rare destinations, peak season tickets, and Mistake
            Fares. Either way, you’ll never overpay on flights again.
          </p>
          <div className={styles.btnContainer}>
            <Button btnType='primary' text='Get Going' href='/' />
          </div>
        </section>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default FinalCTA;
