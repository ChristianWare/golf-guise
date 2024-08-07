import styles from "./Galleryii.module.css";
import Img1 from "../../../public/images/img1.png";
import Img22 from "../../../public/images/img22.jpg";
import Img23 from "../../../public/images/img23.jpg";
import Img24 from "../../../public/images/img24.jpg";
import Img25 from "../../../public/images/img25.jpg";
import Img26 from "../../../public/images/img26.jpg";
import Img27 from "../../../public/images/img27.jpg";
import Img28 from "../../../public/images/img28.jpg";
import Img29 from "../../../public/images/img29.jpg";
import Img30 from "../../../public/images/img30.jpg";
import Img31 from "../../../public/images/img31.jpg";
import Img32 from "../../../public/images/img32.jpg";
import Img33 from "../../../public/images/img33.jpg";
import Img34 from "../../../public/images/img34.jpg";
import Img35 from "../../../public/images/img35.jpg";
import Img36 from "../../../public/images/img36.jpg";
import Img37 from "../../../public/images/img37.jpg";
import Img38 from "../../../public/images/img38.jpg";
import Img39 from "../../../public/images/img39.jpg";
import Img40 from "../../../public/images/img40.jpg";
import Img41 from "../../../public/images/img41.jpg";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Image from "next/image";

const images = [
  { src: Img22, class: "" },
  { src: Img23, class: styles.vStretch },
  { src: Img24, class: styles.hStretch },
  { src: Img25, class: "" },
  { src: Img26, class: "" },
  { src: Img27, class: styles.vStretch },
  { src: Img28, class: styles.bigStretch },
  { src: Img29, class: "" },
  { src: Img30, class: styles.hStretch },
  { src: Img31, class: "" },
  { src: Img32, class: "" },
  { src: Img33, class: "" },
  { src: Img34, class: styles.vStretch },
  { src: Img35, class: "" },
  { src: Img36, class: styles.bigStretch },
  { src: Img37, class: "" },
  { src: Img38, class: styles.hStretch },
  { src: Img39, class: "" },
  { src: Img40, class: styles.bigStretch },
  { src: Img41, class: "" },
  { src: Img1, class: "" },
];

const Galleryii = () => {
  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.gallery}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.imgContainer} ${image.class}`}
            >
              <Image
                src={image.src}
                alt=''
                layout='fill'
                objectFit='cover'
                className={styles.img}
              />
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Galleryii;
