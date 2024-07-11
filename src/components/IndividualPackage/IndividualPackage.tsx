import Image from "next/image";
import Button from "../Button/Button";
import styles from "./IndividualPackage.module.css";

const IndividualPackage = () => {
  return (
    <article>
      <div className={styles.bottom}>
        <div className={styles.right}>
          <div className={styles.rightTop}>
            <h3 className={styles.title}>
              Package 1 <span className={styles.priceii}> - $250 / Day</span>
            </h3>
            {/* <div className={styles.price}>$250 / Day</div> */}
            <p className={styles.copyii}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur vel dolores aliquid voluptatum iure? Quidem pariatur id
              sunt ab temporibus repellat quia dolor! Quas, quibusdam!
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
              <h4>Unlimted Recharge</h4>
              <p className={styles.copyiii}>
                Just reserve an electric vehicle when you need it, and you are
                ready to go. Simple, convenient and hassle-free.
              </p>
            </div>
            {/* <div className={styles.rb2}>
              <h4>Unlimted Recharge</h4>
              <p className={styles.copyiii}>
                Just reserve an electric vehicle when you need it, and you are
                ready to go. Simple, convenient and hassle-free.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </article>
  );
};
export default IndividualPackage;
