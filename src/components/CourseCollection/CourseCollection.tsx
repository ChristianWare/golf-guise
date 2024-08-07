import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./CourseCollection.module.css";
import Image from "next/image";
import Weko from "../../../public/images/weko.jpg";
import Wick from "../../../public/images/wick.jpeg";
import Quintero from "../../../public/images/q.jpeg";
import Boulders from "../../../public/images//boulders.jpg";
import Troon from "../../../public/images/troon.jpg";

const CourseCollection = () => {
  const data = [
    {
      id: 1,
      title: "We-Ko-Pa",
      src: Weko,
    },
    {
      id: 2,
      title: "Wickenburg",
      src: Wick,
    },
    {
      id: 3,
      title: "Quintero",
      src: Quintero,
    },
    {
      id: 4,
      title: "Boulders",
      src: Boulders,
    },
    {
      id: 5,
      title: "Troon",
      src: Troon,
    },
  ];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <h2 className={styles.heading}>Course Collection</h2>
        <div className={styles.bottom}>
          {data.map((x) => (
            <div key={x.id} className={styles.box}>
              <h3 className={styles.title}>{x.title}</h3>
              <div className={styles.imgContainer}>
                <Image src={x.src} alt='img' fill className={styles.img} />
              </div>
            </div>
          ))}
        </div>
        {/* <div className={styles.bottomii}>
            {data.map((y) => (
              <div key={y.id} className={styles.detailsBox}>
                <div className={styles.left}>
                  <h3 className={styles.titleii}>{y.title}</h3>
                  <Tab text={y.city} />
                  <p className={styles.descii}>{y.desc}</p>
                </div>
                <div className={styles.right}>
                  <div className={styles.imgContainerii}>
                    <Image src={y.src} alt='img' fill className={styles.img} />
                  </div>
                </div>
              </div>
            ))}
          </div> */}
      </LayoutWrapper>
    </section>
  );
};
export default CourseCollection;
