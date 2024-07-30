import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./FeaturedPackages.module.css";
import Image from "next/image";
import Img from "../../../public/images/img1.png";
import Button from "../Button/Button";

const data = [
  {
    id: 1,
    src: Img,
    title: "Luxury Golf Retreat",
    desc: "Enjoy five-star accommodations and play at the top-rated courses in Arizona.",
  },
  {
    id: 2,
    src: Img,
    title: "Family Golf Fun",
    desc: "Perfect for families, with activities for all ages and skill levels. ",
  },
  {
    id: 3,
    src: Img,
    title: "Weekend Golf Getaway",
    desc: "A quick escape to rejuvenate with a few rounds of golf.",
  },
];

const FeaturedPackages = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2>Featured Packages</h2>
        </div>
        <div className={styles.bottom}>
          {data.map((x) => (
            <article key={x.id} className={styles.card}>
              <div className={styles.imgContainer}>
                <Image src={x.src} alt='' fill className={styles.img} />
              </div>
              <h3 className={styles.title}>{x.title}</h3>
              <p className={styles.desc}>{x.desc}</p>
              <div className={styles.btnContainer}>
                <Button
                  href='/'
                  text='Learn more'
                  btnType='primaryiii'
                  iconColor='white'
                />
              </div>
            </article>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default FeaturedPackages;
