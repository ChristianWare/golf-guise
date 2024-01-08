import { terms } from "@/lib/data";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./TermsSection.module.css";
import Arrow from "../../../public/icons/arrow.svg";
import Button from "../Button/Button";
import Link from "next/link";

const TermsSection = () => {
  function shuffleArray(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const termIndices = terms.map((_, index) => index);
  shuffleArray(termIndices);

  const randomIndices = termIndices.slice(0, 6);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <h2 className={styles.heading}>Golf terms to know</h2>
          </div>
          <div className={styles.bottom}>
            {randomIndices.map((index) => (
              <Link
                href={`/glossary/${terms[index].title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className={styles.box}
                key={index}
              >
                <h3 className={styles.title}>
                  {terms[index].title}
                  <span className={styles.arrow}>
                    <Arrow width={25} height={25} className={styles.arrow} />
                  </span>
                </h3>
                <p className={styles.desc}>{terms[index].description}</p>
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
