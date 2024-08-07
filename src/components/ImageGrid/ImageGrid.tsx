import Image from "next/image";
import Link from "next/link";
import styles from "./ImageGrid.module.css";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Button from "../Button/Button";
import Weko from "../../../public/images/weko.jpg";
import Wick from "../../../public/images/wick.jpeg";
import Quintero from "../../../public/images/q.jpeg";
import Boulders from "../../../public/images//boulders.jpg";
import Troon from "../../../public/images/troon.jpg";

const ImageGrid = () => {
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
          <Link href='/courses/#wickenburg' className={styles.box3}>
            <h5 className={styles.wickenburg}>Wickenburg</h5>
          </Link>

          <Link href='/courses/#quintero' className={styles.box4}>
            <h5 className={styles.quintero}>Quintero</h5>
          </Link>

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
          <Link href='/courses/#boulders' className={styles.box2B}>
            <h5 className={styles.boulders}>Boulders</h5>
          </Link>
          <Link href='/courses/#we-ko-pa' className={styles.box3B}>
            <h5 className={styles.wekopa}>We-Ko-Pa</h5>
          </Link>
          <Link href='/courses/#troon' className={styles.box4B}>
            <h5 className={styles.troon}>Troon</h5>
          </Link>
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
