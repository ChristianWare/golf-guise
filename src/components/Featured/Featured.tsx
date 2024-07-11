import Image from "next/image";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Featured.module.css";
import Img1 from "../../../public/images/img1.png";
import Button from "../Button/Button";
import Arrow from "../../../public/icons/arrow.svg";
import Tab from "../Tab/Tab";

const Featured = () => {
  return (
    <section>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.top}>
              <Tab text='Featured' />
              <h2 className={styles.heading}>Featured Package</h2>
              <p className={styles.copy}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                voluptas. Asperiores praesentium deleniti officia quidem? Illo
                omnis excepturi ducimus voluptatem.
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
                  <h3 className={styles.title}>
                    Package 1{" "}
                    <span className={styles.priceii}> - $250 / Day</span>
                  </h3>
                  {/* <div className={styles.price}>$250 / Day</div> */}
                  <p className={styles.copyii}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur vel dolores aliquid voluptatum iure? Quidem
                    pariatur id sunt ab temporibus repellat quia dolor! Quas,
                    quibusdam!
                  </p>
                  <div className={styles.btnContainer}>
                    <Button
                      btnType='green'
                      text='Get Started Now'
                      href='/'
                      iconColor='white'
                    />
                  </div>
                </div>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Access to all vehicle categories
                  </li>
                  <li className={styles.listItem}>
                    Access to all vehicle categories
                  </li>
                  <li className={styles.listItem}>
                    Access to all vehicle categories
                  </li>
                  <li className={styles.listItem}>
                    Access to all vehicle categories
                  </li>
                </ul>
                <div className={styles.rightBottom}>
                  <div className={styles.rb1}>
                    <Arrow width={25} height={25} className={styles.icon} />
                    <h4>Unlimted Recharge</h4>
                    <p className={styles.copyiii}>
                      Just reserve an electric vehicle when you need it, and you
                      are ready to go. Simple, convenient and hassle-free.
                    </p>
                  </div>
                  <div className={styles.rb2}>
                    <Arrow width={25} height={25} className={styles.icon} />
                    <h4>Unlimted Recharge</h4>
                    <p className={styles.copyiii}>
                      Just reserve an electric vehicle when you need it, and you
                      are ready to go. Simple, convenient and hassle-free.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Featured;