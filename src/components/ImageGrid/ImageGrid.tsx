"use client";

import Image from "next/image";
import styles from "./ImageGrid.module.css";
import Img from "../../../public/images/img1.png";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import { usePathname } from "next/navigation";
import Button from "../Button/Button";
import Weko from "../../../public/images/weko.jpg";
import Wick from "../../../public/images/wick.jpeg";
import Quintero from "../../../public/images/q.jpeg";
import Boulders from "../../../public/images//boulders.jpg";
import Troon from "../../../public/images/troon.jpg";

const ImageGrid = () => {
  const pathname = usePathname();

  return (
    <LayoutWrapper>
      <div className={styles.content}>
        <div className={styles.boxContainer}>
          <div className={styles.topContainer}>
            <h2 className={styles.heading}>Our Golf Courses</h2>
            <p>~ Courses We Partner With ~</p>
          </div>
          <div className={styles.box1}>
            <Image
              src={Weko}
              alt='Nacho fries'
              layout='fill'
              objectFit='cover'
              className={styles.img}
            />
          </div>
          <div className={styles.box2}>
            <Image
              src={Wick}
              alt='drone image 2'
              layout='fill'
              objectFit='cover'
              className={styles.img}
            />
          </div>
          <div className={styles.box3}>
            <h5 className={styles.wickenburg}>Wickenburg</h5>
          </div>

          <div className={styles.box4}>
            <h5 className={styles.quintero}>Quintero</h5>
          </div>

          <div className={styles.box5}>
            <Image
              src={Quintero}
              alt='drone image 3'
              layout='fill'
              objectFit='cover'
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.boxContainer2}>
          <div className={styles.box1B}>
            <Image
              src={Troon}
              alt='drone image 4'
              layout='fill'
              objectFit='cover'
              className={styles.img}
            />
          </div>
          <div className={styles.box2B}>
            <h5 className={styles.boulders}>Boulders</h5>
          </div>
          <div className={styles.box3B}>
            <h5 className={styles.wekopa}>We-Ko-Pa</h5>
          </div>
          <div className={styles.box4B}>
            <h5 className={styles.troon}>Troon</h5>
          </div>
          <div className={styles.box5B}>
            <Image
              src={Boulders}
              alt='drone image 6'
              layout='fill'
              objectFit='cover'
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.btnContainerii}>
          <Button
            btnType='primary'
            text='More Course Details'
            href='/courses'
            iconColor='white'
          />
        </div>
      </div>
    </LayoutWrapper>
  );
};
export default ImageGrid;
