import { terms } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./TermsSection.module.css";
import Arrow from "../../../public/icons/arrow.svg";
import Button from "../Button/Button";
import Link from "next/link";
import Image from "next/image";
import Img from "../../../public/images/img1.png";

const data = [
  {
    id: 1,
    series: "Diamond Series",
    src: Img,
  },
  {
    id: 1,
    series: "Platinum Series",
    src: Img,
  },
  {
    id: 1,
    series: "Gold Series",
    src: Img,
  },
  {
    id: 4,
    series: "Silver Series",
    src: Img,
  },
];

const TermsSection = () => {
  // function shuffleArray(array: number[]) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  // }

  // const termIndices = terms.map((_, index) => index);
  // shuffleArray(termIndices);

  // const randomIndices = termIndices.slice(0, 4);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>Golf Club Rentals</h2>
        </div>
        <div className={styles.bottom}>
          {/* {randomIndices.map((index) => (
            <Link
              href={`/glossary/${terms[index].title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className={styles.box}
              key={index}
            >
              <h3 className={styles.title}>
                {terms[index].title}
                <span className={styles.arrow}>
                  <Arrow width={25} height={25} className={styles.arrow} />
                </span>
              </h3>
              <p className={styles.desc}>{terms[index].description}</p>
            </Link>
          ))} */}
          {data.map((x: any) => (
            <div key={x.id} className={styles.card}>
              <Link href='/' className={styles.box}>
                <h3 className={styles.title}>{x.series}</h3>
                <span className={styles.arrow}>
                  <Arrow width={35} height={35} className={styles.arrow} />
                </span>
              </Link>
              <div className={styles.imgContainer}>
                <Image src={x.src} fill alt='' className={styles.img} />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.btnContainer}>
          <Button
            btnType='primary'
            text='View All'
            href='/glossary'
            iconColor='white'
          />
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default TermsSection;
