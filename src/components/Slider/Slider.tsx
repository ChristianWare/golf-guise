import styles from "./Slider.module.css";
import Image from "next/image";
import Img1 from "../../../public/images/img1.png";
import Img2 from "../../../public/images/img2.jpg";
import Img3 from "../../../public/images/img3.jpg";
import Img4 from "../../../public/images/img4.jpg";
import Img5 from "../../../public/images/img5.jpg";
import Img6 from "../../../public/images/img6.jpg";
import Img7 from "../../../public/images/img7.jpg";
import Img8 from "../../../public/images/img8.jpg";
import Img9 from "../../../public/images/img9.jpg";
import Img10 from "../../../public/images/img10.jpg";
import Img11 from "../../../public/images/img11.jpg";
import Img12 from "../../../public/images/img12.jpg";
import Img13 from "../../../public/images/img13.jpg";
import Img14 from "../../../public/images/img14.jpg";
import Img15 from "../../../public/images/img15.jpg";
import Img16 from "../../../public/images/img16.jpg";
import Img17 from "../../../public/images/img17.jpg";
import Img18 from "../../../public/images/img18.jpg";
import Img19 from "../../../public/images/img19.jpg";
import Img20 from "../../../public/images/img20.jpg";

const Slider = () => {
  const logos = [
    { src: Img1, position: 1 },
    { src: Img2, position: 2 },
    { src: Img3, position: 3 },
    { src: Img4, position: 4 },
    { src: Img5, position: 5 },
    { src: Img6, position: 6 },
    { src: Img7, position: 7 },
    { src: Img8, position: 8 },
    { src: Img9, position: 9 },
    { src: Img10, position: 10 },
    { src: Img11, position: 11 },
    { src: Img12, position: 12 },
    { src: Img13, position: 13 },
    { src: Img14, position: 14 },
    { src: Img15, position: 15 }  ,
    { src: Img16, position: 16 },
    { src: Img17, position: 17 },
    { src: Img18, position: 18 },
    { src: Img19, position: 19 },
    { src: Img20, position: 20 },
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
