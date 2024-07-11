import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import IndividualPackage from "./IndividualPackage";
import styles from "./Section.module.css";

const Section = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <h2 className={styles.heading}>Other Package</h2>
          <div className={styles.bottom}>
            <IndividualPackage />
            <IndividualPackage />
            <IndividualPackage />
            <IndividualPackage />
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Section;
