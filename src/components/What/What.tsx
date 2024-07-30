import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./What.module.css";

const What = () => {
  return (
    <section>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.top}>
              <p className={styles.copy}>
                Welcome to AZ Golf Whisperers, your premier provider of
                exclusive golf vacation packages in the heart of Arizona.
                Whether you&apos;re looking for a luxurious escape, a
                budget-friendly retreat, or a family-friendly adventure, we have
                the perfect package for you.
              </p>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default What;
