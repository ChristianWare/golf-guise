import { terms } from "@/lib/data";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./TermsSection.module.css";
import Arrow from "../../../public/icons/arrow.svg";
import Button from "../Button/Button";
import Link from "next/link";

const TermsSection = () => {
  return (
    <section className={styles.contianer}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <h2 className={styles.heading}>Golf terms to know</h2>
          </div>
          <div className={styles.bottom}>
            {terms.slice(0, 6).map((x, index) => (
              <Link
                href={`/glossary/${x.title.toLowerCase().replace(/\s+/g, "-")}`}
                className={styles.box}
                key={index}
              >
                <h3 className={styles.title}>
                  {x.title}
                  <span className={styles.arrow}>
                    <Arrow width={25} height={25} className={styles.arrow} />
                  </span>
                </h3>
                <p className={styles.desc}>{x.description}</p>
              </Link>
            ))}
          </div>
          <div className={styles.btnContainer}>
            <Button btnType='primary' text='View All' href='/glossary' />
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default TermsSection;
