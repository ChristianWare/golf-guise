"use client";

import styles from "./Values.module.css";
import Image from "next/image";
import Img1 from "../../../public/images/img1.png";
import Img2 from "../../../public/images/img1.png";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";

const Values = () => {
  const data = [
    {
      title: "Cindy Smith, CEO ",
      src: Img1,
      detail:
        "With over 20 years in the golf industry, Cindy brings a wealth of knowledge and a deep love for the game.",
    },
    {
      title: "Lewis Smith, CTO",
      detail:
        "Lewis has been curating personalized travel experiences for over a decade.",
      src: Img2,
    },
  ];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>Meet Our Team</h2>
          <p className={styles.topCopy}>
           Meet our team!
          </p>
        </div>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div key={index} className={styles.box}>
              <div className={styles.miscContainer}>
                <div className={styles.imgContainer}>
                  <Image
                    src={x.src}
                    alt=''
                    layout='fill'
                    objectFit='cover'
                    className={styles.img}
                  />
                  <div className={styles.info}>
                    <h3 className={styles.title}>{x.title}</h3>
                    <p className={styles.detail}>{x.detail}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Values;
