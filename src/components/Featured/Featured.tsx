"use client";

import Image from "next/image";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Featured.module.css";
import Img1 from "../../../public/images/img1.png";
import Button from "../Button/Button";
import Arrow from "../../../public/icons/arrow.svg";
import Tab from "../Tab/Tab";
import { usePathname } from "next/navigation";

const Featured = () => {
  const pathname = usePathname();

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            {/* <Tab text='Featured' /> */}
            <h2 className={styles.heading}>
              Featured Package: <br /> Scottsdale Summertime Special
            </h2>
            <p className={styles.copy}>
              Experience the fantastic Sonesta Suites, 3 great rounds of golf,
              and a rental car starting from $339 per person, per day all in!
            </p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <Image src={Img1} alt='' fill className={styles.img} />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.rightTop}>
                <h3 className={styles.title}>$339 / Day</h3>
                <p className={styles.copyii}>
                  &quot;Scottsdale Summertime Special&quot; Package includes:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    • 3 Nights at The Sonesta Suites Scottsdale
                  </li>
                  <li className={styles.listItem}>
                    • Complimentary breakfast buffet with a beer and wine happy
                    hour after your round
                  </li>
                  <li className={styles.listItem}>
                    • 3 Days of golf at: Legacy Golf Club
                  </li>
                </ul>
              </div>
              <div className={styles.rightBottom}>
                <div className={styles.rb1}>
                  <Arrow width={25} height={25} className={styles.icon} />
                  <h4 className={styles.h4}>Contact Cindy</h4>
                  <p className={styles.copyiii}>
                    602-667-9889
                    <br />
                    <br />
                    cindy@azgolfwhisperer.com
                  </p>
                </div>
                <div className={styles.rb2}>
                  <Arrow width={25} height={25} className={styles.icon} />
                  <h4 className={styles.h4}>Contact Lewis</h4>
                  <p className={styles.copyiii}>
                    602-784-1988
                    <br />
                    <br />
                    lewis@azgolfwhisperer.com
                  </p>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Button
              btnType='primaryiii'
              text='More Details'
              href='/'
              iconColor='white'
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Featured;
