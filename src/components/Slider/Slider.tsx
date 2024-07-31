import styles from "./Slider.module.css";
import Image from "next/image";
import Img1 from "../../../public/images/img1.png";

const Slider = () => {
  const logos = [
    { src: Img1, position: 1 },
    { src: Img1, position: 2 },
    { src: Img1, position: 3 },
    { src: Img1, position: 4 },
    { src: Img1, position: 5 },
    { src: Img1, position: 6 },
    { src: Img1, position: 7 },
    { src: Img1, position: 8 },
    { src: Img1, position: 9 },
    { src: Img1, position: 10 },
    { src: Img1, position: 11 },
    { src: Img1, position: 12 },
    { src: Img1, position: 13 },
    { src: Img1, position: 14 },
    { src: Img1, position: 15 },
    { src: Img1, position: 16 },
    { src: Img1, position: 17 },
    { src: Img1, position: 18 },
    { src: Img1, position: 19 },
    { src: Img1, position: 20 },
    // { logo: <Logo1 className={styles.logo} />, position: 1 },
    // { logo: <Logo2 className={styles.logo} />, position: 2 },
    // { logo: <Logo3 className={styles.logo} />, position: 3 },
    // { logo: <Logo4 className={styles.logo} />, position: 4 },
    // { logo: <Logo5 className={styles.logo} />, position: 5 },
    // { logo: <Logo6 className={styles.logo} />, position: 6 },
    // { logo: <Logo7 className={styles.logo} />, position: 7 },
    // { logo: <Logo8 className={styles.logo} />, position: 8 },
    // { logo: <Logo9 className={styles.logo} />, position: 9 },
    // { logo: <Logo10 className={styles.logo} />, position: 10 },
    // { logo: <Logo1 className={styles.logo} />, position: 11 },
    // { logo: <Logo2 className={styles.logo} />, position: 12 },
    // { logo: <Logo3 className={styles.logo} />, position: 13 },
    // { logo: <Logo4 className={styles.logo} />, position: 14 },
    // { logo: <Logo5 className={styles.logo} />, position: 15 },
    // { logo: <Logo6 className={styles.logo} />, position: 16 },
    // { logo: <Logo7 className={styles.logo} />, position: 17 },
    // { logo: <Logo8 className={styles.logo} />, position: 18 },
    // { logo: <Logo9 className={styles.logo} />, position: 19 },
    // { logo: <Logo10 className={styles.logo} />, position: 20 },
  ];

  return (
    <div className={styles.slider}>
      <div className={styles.track}>
        {[...logos, ...logos].map((x: any, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.imgContainer}>
              <Image src={x.src} fill alt='' className={styles.img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
