import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./AboutSection.module.css";
import Img from "../../../public/images/img1.png";

const AboutSection = () => {
  const data = [
    {
      title: "Values",
      description:
        "We uphold integrity, focus on exceeding client expectations with personalized service, deliver exceptional quality, and are driven by our passion for creating memorable golf and travel experiences.",
    },
    {
      title: "Mission",
      description:
        "Our mission is to provide golf enthusiasts with unparalleled vacation experiences in Arizona, combining world-class golf courses, luxurious accommodations, and exceptional service to create unforgettable memories.",
    },
    {
      title: "Vision",
      description:
        "Our vision is to be the leading provider of golf vacation packages in Arizona, known for our personalized service, exclusive partnerships, and commitment to excellence, inspiring golfers from around the world to explore and enjoy the beauty of Arizona's golf destinations.",
    },
  ] as const;
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.box}>
          <h2 className={styles.heading}>About Us</h2>
          <p className={styles.copy}>
            AZ Golf Whisperers is dedicated to providing exceptional golf
            vacation experiences in Arizona. Our passion for golf and commitment
            to excellence drive us to create unforgettable trips tailored to
            your needs.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image
                src={Img}
                alt=''
                layout='fill'
                objectFit='cover'
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTop}>
              <div className={styles.imgContainerii}>
                <Image
                  src={Img}
                  alt=''
                  layout='fill'
                  objectFit='cover'
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.rightBottom}>
              {data.map((x, index) => (
                <div key={index} className={styles.card}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default AboutSection;
