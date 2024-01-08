import { gear } from "@/lib/data";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Gear.module.css";
import Image from "next/image";
import Img from "../../../public/images/club.png";
import Button from "../Button/Button";

const Gear = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <h2 className={styles.heading}>Gear we love</h2>
          </div>
          <div className={styles.bottom}>
            {gear.slice(0, 4).map((x, index) => (
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
          <div className={styles.btnContainerii}>
            <Button btnType='primary' text='View All' href='/gear' />
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Gear;
