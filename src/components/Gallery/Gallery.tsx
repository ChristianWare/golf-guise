import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Gallery.module.css";
import Img1 from "../../../public/images/img1.png";
import Image from "next/image";

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
      <LayoutWrapper>
        <ContentPadding>
          <h2 className={styles.heading}>Gallery</h2>
          <p className={styles.copy}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            sapiente possimus blanditiis consectetur optio necessitatibus, autem
            libero doloribus commodi, unde reprehenderit nulla eveniet facere
            exercitationem? Ipsam accusantium rem quibusdam dicta.
          </p>
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
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Gallery;
