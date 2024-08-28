import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import IndividualPackage from "./IndividualPackage";
import styles from "./Section.module.css";
import { golfPackages } from "../../../lib/data";

const Section = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <h2 className={styles.heading}>Other Packages</h2>
        <div className={styles.bottom}>
          {golfPackages.map((pkg) => (
            <IndividualPackage key={pkg.id} packageData={pkg} />
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Section;
