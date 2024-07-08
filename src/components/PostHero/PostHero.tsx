import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./PostHero.module.css";
import Bell from "../../../public/icons/bell.svg";
import Food from "../../../public/icons/food.svg";
import Golf from "../../../public/icons/golf.svg";
import Golfii from "../../../public/icons/golfii.svg";
import ImageGrid from "../ImageGrid/ImageGrid";
import ContentPadding from "../ContentPadding/ContentPadding";

const preHero = [
  {
    icon: <Bell width={60} height={60} className={styles.icon} />,
    feature: "Hotel Stays",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi provident excepturi, quo quas veniam dignissimos.",
  },
  {
    icon: <Golfii width={60} height={60} className={styles.icon} />,
    feature: "Tee Time Reservations",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi provident excepturi, quo quas veniam dignissimos.",
  },
  {
    icon: <Golf width={60} height={60} className={styles.icon} />,
    feature: "Golf Equipment Rental",
    desc: "RLorem, ipsum dolor sit amet consectetur adipisicing elit. Animi provident excepturi, quo quas veniam dignissimos.",
  },
  {
    icon: <Food width={60} height={60} className={styles.icon} />,
    feature: "Dining Options",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi provident excepturi, quo quas veniam dignissimos.",
  },
];

const PostHero = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.contentTop}>
            <h2 className={styles.heading}>All Packages Include...</h2>
          </div>
          <div className={styles.contentBottom}>
            {preHero.map((x, index) => (
              <div key={index} className={styles.box}>
                {x.icon}
                <h3 className={styles.value}>{x.feature}</h3>
                <p className={styles.description}>{x.desc}</p>
              </div>
            ))}
          </div>
          <h2 className={styles.headingii}>Golf Courses </h2>
          <ImageGrid />
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default PostHero;
