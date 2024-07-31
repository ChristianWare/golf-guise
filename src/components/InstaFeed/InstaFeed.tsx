import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./InstaFeed.module.css";
import Image from "next/image";
import Img from "../../../public/images/img1.png";

const InstaFeed = () => {
  return (
    <LayoutWrapper>
        <section className={styles.container}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Instagram</h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.imgContainer}>
              <Image src={Img} alt='image' fill className={styles.img} />
            </div>
            <div className={styles.imgContainer}>
              <Image src={Img} alt='image' fill className={styles.img} />
            </div>
            <div className={styles.imgContainer}>
              <Image src={Img} alt='image' fill className={styles.img} />
            </div>
            <div className={styles.imgContainer}>
              <Image src={Img} alt='image' fill className={styles.img} />
            </div>
          </div>
        </section>
    </LayoutWrapper>
  );
};
export default InstaFeed;
