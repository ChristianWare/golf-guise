import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";
import styles from "../../styles/GlossaryPage.module.css";
import ContentPadding from "@/components/ContentPadding/ContentPadding";
import PageIntro from "@/components/PageIntro/PageIntro";
import { glossaryMenu, terms } from "@/lib/data";
import Link from "next/link";
import Arrow from "../../../public/icons/arrow.svg";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import InstaFeed from "@/components/InstaFeed/InstaFeed";

const GlossaryPage = () => {
  return (
    <main>
      <PageIntro
        heading='Glossary'
        copy='Read up on golf terms, acronyms, and the industry jargon you need to know in our glossary of golf lingo.'
        center='center'
      />
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            {glossaryMenu.map((x, index) => (
              <Link href='#' key={index} className={styles.letter}>
                {x.letter}
              </Link>
            ))}
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              {glossaryMenu.map((x, index) => (
                <div key={index} className={styles.box}>
                  <div className={styles.letter}>{x.letter}</div>
                  <div className={styles.term}>
                    {x.section.map((y, index) => (
                      <div key={index} className={styles.term}>
                        {y.term}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.bottomRight}>
              {terms.map((x, index) => (
                <div className={styles.termBox} key={index}>
                  <h3 className={styles.title}>
                    {x.title}
                    <span className={styles.arrow}>
                      <Arrow width={25} height={25} className={styles.arrow} />
                    </span>
                  </h3>
                  <p className={styles.desc}>{x.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
      <InstaFeed />
      <FinalCTA />
    </main>
  );
};
export default GlossaryPage;
