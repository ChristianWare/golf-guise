import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./InstaFeed.module.css";

const InstaFeed = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <h2 className={styles.heading}>Lates from Instagram</h2>
          </div>
          <div className={styles.bottom}>images here</div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default InstaFeed;
