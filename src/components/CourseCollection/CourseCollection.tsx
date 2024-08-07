import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./CourseCollection.module.css";
import Image from "next/image";
import Weko from "../../../public/images/weko.jpg";
import Wick from "../../../public/images/wick.jpeg";
import Quintero from "../../../public/images/q.jpeg";
import Boulders from "../../../public/images//boulders.jpg";
import Troon from "../../../public/images/troon.jpg";
import Link from "next/link";

const CourseCollection = () => {
  const data = [
    {
      id: 1,
      title: "We-Ko-Pa",
      src: Weko,
      href: "/courses/#we-ko-pa",
    },
    {
      id: 2,
      title: "Wickenburg",
      src: Wick,
      href: "/courses/#wickenburg",
    },
    {
      id: 3,
      title: "Quintero",
      src: Quintero,
      href: "/courses/#quintero",
    },
    {
      id: 4,
      title: "Boulders",
      src: Boulders,
      href: "/courses/#boulders",
    },
    {
      id: 5,
      title: "Troon",
      src: Troon,
      href: "/courses/#troon",
    },
  ];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <h2 className={styles.heading}>Course Collection</h2>
        <div className={styles.bottom}>
          {data.map((x) => (
            <Link href={x.href} key={x.id} className={styles.box}>
              <h3 className={styles.title}>{x.title}</h3>
              <div className={styles.imgContainer}>
                <Image src={x.src} alt='img' fill className={styles.img} />
              </div>
            </Link>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default CourseCollection;
