import styles from "./Galleryii.module.css";
import Img1 from "../../../public/images/img1.png";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Image from "next/image";

const images = [
  { src: Img1, class: "" },
  { src: Img1, class: styles.vStretch },
  { src: Img1, class: styles.hStretch },
  { src: Img1, class: "" },
  { src: Img1, class: "" },
  { src: Img1, class: styles.vStretch },
  { src: Img1, class: styles.bigStretch },
    { src: Img1, class: "" },
    { src: Img1, class: styles.hStretch },
    { src: Img1, class: "" },
    { src: Img1, class: "" },
    { src: Img1, class: "" },
    { src: Img1, class: styles.vStretch },
    { src: Img1, class: "" },
    { src: Img1, class: styles.bigStretch },
    { src: Img1, class: "" },
    { src: Img1, class: styles.hStretch },
    { src: Img1, class: "" },
    { src: Img1, class: styles.bigStretch },
    { src: Img1, class: "" },
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
