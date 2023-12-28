import ContentPadding from "@/components/ContentPadding/ContentPadding";
import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";
import PageIntro from "@/components/PageIntro/PageIntro";
import styles from "../../styles/GearPage.module.css";
import Image from "next/image";
import Img from "../../../public/images/club.png";
import Button from "@/components/Button/Button";
import { gear } from "@/lib/data";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import InstaFeed from "@/components/InstaFeed/InstaFeed";
import TermsSection from "@/components/TermsSection/TermsSection";

const GearPage = () => {
  return (
    <main>
      <PageIntro
        heading='Gear'
        copy='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                ex aliquid, repudiandae non illo quibusdam?'
      />
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.bottom}>
            {gear.map((x, index) => (
              <div key={index} className={styles.box}>
                <div className={styles.imgContainer}>
                  <Image src={Img} alt='hello' fill className={styles.img} />
                </div>
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.price}>$ {x.price}</p>
                <div className={styles.btnContainer}>
                  <Button
                    href='/'
                    btnType='secondary'
                    text='See on Amazon'
                    iconColor='white'
                  />
                </div>
              </div>
            ))}
          </div>
        </ContentPadding>
      </LayoutWrapper>
      <TermsSection />
      <InstaFeed />
      <FinalCTA />
    </main>
  );
};
export default GearPage;
