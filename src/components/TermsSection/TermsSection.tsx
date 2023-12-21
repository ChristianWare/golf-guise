import { terms } from "@/lib/data";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./TermsSection.module.css";
import Arrow from "../../../public/icons/arrow.svg";
import Button from "../Button/Button";

const TermsSection = () => {
  return (
    <section className={styles.contianer}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <h2 className={styles.heading}>Golf terms to know.</h2>
            <div className={styles.btnContainer}>
              <Button btnType='primary' text='View All' href='/' />
            </div>
          </div>
          <div className={styles.bottom}>
            {terms.map((x, index) => (
              <div className={styles.box} key={index}>
                <h3 className={styles.title}>
                  {x.title}
                  <span className={styles.arrow}>
                    <Arrow width={30} height={30} className={styles.arrow} />
                  </span>
                </h3>
                <p className={styles.title}>{x.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.btnContainerii}>
            <Button btnType='primary' text='View All' href='/' />
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default TermsSection;
