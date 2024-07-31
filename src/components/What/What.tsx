import Image from "next/image";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./What.module.css";
import Img1 from "../../../public/images/img1.png";
import Tab from "../Tab/Tab";
import DirectCommunication from "../DirectCommunication/DirectCommunication";

const What = () => {
  return (
    <section>
      <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.top}>
              <h2 className={styles.heading}>
                What is a Golf Stay and Play Package?
              </h2>
            </div>
            <p className={styles.copy}>
              A golf stay and play package is a bundled deal. It typically
              includes accommodation at a golf resort and access to the golf
              course.
               These packages are designed for convenience. They allow
              golfers to stay close to the action, reducing travel time. 
            </p>
            <div className={styles.bottom}>
              <div className={styles.imgContainer}>
                <Image alt='image' src={Img1} fill className={styles.img} />
              </div>
              <div className={styles.box1}>
                <h3>Convenience</h3>
                <p className={styles.box1Copy}>
                  These packages are designed for convenience. They allow
                  golfers to stay close to the action, reducing travel time.
                </p>
              </div>
              <div className={styles.box2}>
                <h3>experiences</h3>
                <p className={styles.box2Copy}>
                  They also offer a variety of golfing experiences. From
                  championship courses to beginner-friendly greens, there&apos;s
                  something for everyone.
                </p>
              </div>
            </div>
          </div>
          {/* <DirectCommunication /> */}
      </LayoutWrapper>
    </section>
  );
};
export default What;
