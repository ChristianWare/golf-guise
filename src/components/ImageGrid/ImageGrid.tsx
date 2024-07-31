"use client";

import Image from "next/image";
import styles from "./ImageGrid.module.css";
import Img from "../../../public/images/img1.png";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";
import Tab from "../Tab/Tab";
import { usePathname } from "next/navigation";
import Button from "../Button/Button";

const ImageGrid = () => {
  const pathname = usePathname();

  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.topContainer}>
            <h2 className={styles.heading}>Our Golf Courses</h2>
          </div>
          <div className={styles.boxContainer}>
            <div className={styles.box1}>
              <Image
                src={Img}
                alt='Nacho fries'
                layout='fill'
                objectFit='cover'
                className={styles.img}
              />
            </div>
            <div className={styles.box2}>
              <Image
                src={Img}
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
                src={Img}
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
                src={Img}
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
              <Image
                src={Img}
                alt='drone image 5'
                layout='fill'
                objectFit='cover'
                className={styles.img}
              />
            </div>
            <div className={styles.box4B}>
              <h5 className={styles.troon}>Troon</h5>
            </div>
            <div className={styles.box5B}>
              <Image
                src={Img}
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
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default ImageGrid;
