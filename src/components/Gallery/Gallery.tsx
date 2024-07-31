import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Gallery.module.css";
import Img1 from "../../../public/images/img1.png";
import Image from "next/image";
import Slider from "../Slider/Slider";

const images = [
  { src: Img1, class: "" },
  { src: Img1, class: styles.vStretch },
  { src: Img1, class: styles.hStretch },
  { src: Img1, class: "" },
  { src: Img1, class: "" },
  { src: Img1, class: styles.vStretch },
  { src: Img1, class: styles.bigStretch },
  //   { src: Img1, class: "" },
  //   { src: Img1, class: styles.hStretch },
  //   { src: Img1, class: "" },
  //   { src: Img1, class: "" },
  //   { src: Img1, class: "" },
  //   { src: Img1, class: styles.vStretch },
  //   { src: Img1, class: "" },
  //   { src: Img1, class: styles.bigStretch },
  //   { src: Img1, class: "" },
  //   { src: Img1, class: styles.hStretch },
  //   { src: Img1, class: "" },
  //   { src: Img1, class: styles.bigStretch },
  //   { src: Img1, class: "" },
  //   { src: Img1, class: "" },
];

const Gallery = () => {
  return (
    <section className={styles.container}>
      {/* <LayoutWrapper> */}
        <h2 className={styles.heading}>Gallery</h2>

        <div className={styles.gallery}>
          {/* {images.map((image, index) => (
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
          ))} */}
        </div>
      {/* </LayoutWrapper> */}
        <Slider />
    </section>
  );
};
export default Gallery;
