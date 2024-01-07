import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";
import styles from "../../styles/GlossaryPage.module.css";
import ContentPadding from "@/components/ContentPadding/ContentPadding";
import PageIntro from "@/components/PageIntro/PageIntro";
import { glossaryMenu } from "@/lib/data";
import Link from "next/link";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import InstaFeed from "@/components/InstaFeed/InstaFeed";
import Button from "@/components/Button/Button";

export default function GlossaryPage() {
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
              <Link
                href={`#${x.letter}`}
                key={index}
                className={styles.letter1}
              >
                {x.letter}
              </Link>
            ))}
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              {glossaryMenu.map((x, index) => (
                <div key={index} className={styles.box}>
                  <Link href={`#${x.letter}`} className={styles.letter}>
                    {x.letter}
                  </Link>
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
              {glossaryMenu.map((x, index) => (
                <div
                  key={index}
                  className={styles.sectionContainer}
                  id={x.letter}
                >
                  <h2 className={styles.heading}>{x.letter}</h2>
                  <div className={styles.sBottom}>
                    {x.section.map((y, index) => (
                      <div key={index} className={styles.section}>
                        <h3 className={styles.title}>{y.term}</h3>
                        <p className={styles.desc}>{y.description}</p>
                        <Button
                          text='word details'
                          btnType='tertiary'
                          iconColor='white'
                          href={`/glossary/${y.term
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        />
                      </div>
                    ))}
                  </div>
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
}
