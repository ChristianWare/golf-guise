import Button from "../Button/Button";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./FinalCTA.module.css";

const FinalCTA = () => {
  return (
    <LayoutWrapper>
        <section className={styles.container}>
          <h2 className={styles.heading}>Final Call to Action</h2>
          <p className={styles.copy}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos fuga
            id culpa accusamus eos veritatis.
          </p>
          <div className={styles.btnContainer}>
            <Button btnType='primary' text='Current Offers' href='/' />
          </div>
        </section>
    </LayoutWrapper>
  );
};
export default FinalCTA;
