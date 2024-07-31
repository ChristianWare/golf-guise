import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./CourseCollection.module.css";
import Image from "next/image";
import Img1 from "../../../public/images/img1.png";
import Tab from "../Tab/Tab";

const CourseCollection = () => {
  const data = [
    {
      id: 1,
      title: "We-Ko-Pa Golf Club",
      desc: "The We-Ko-Pa Golf Club in Arizona offers two award-winning courses set amidst the stunning Sonoran Desert landscape, providing a challenging yet scenic golfing experience. Renowned for its pristine conditions and breathtaking views, the club promises an unforgettable outing for golf enthusiasts of all levels.",
      src: Img1,
      city: "Fountain Hills",
    },
    {
      id: 2,
      title: "Dove Valley Ranch Golf Club",
      desc: "Dove Valley Ranch Golf Club in Arizona features a championship course designed by Robert Trent Jones Jr., blending natural desert beauty with a challenging layout. Known for its well-maintained greens and picturesque surroundings, the club offers a memorable golfing experience for players of all skill levels.",
      src: Img1,
      city: "Cave Creek",
    },
    {
      id: 3,
      title: "Ancala Country Club",
      desc: "Ancala Country Club in Scottsdale, Arizona, boasts a beautifully designed course by Pete Dye, offering stunning views of the McDowell Mountains. With its exceptional facilities and challenging play, the club provides a premier golfing experience in a luxurious setting.",
      src: Img1,
      city: "Scottsdale",
    },
    {
      id: 4,
      title: "Anthem Golf and Country Club",
      desc: "Anthem Golf and Country Club in Anthem, Arizona, offers two distinct Greg Nash-designed courses that provide both a challenging and scenic golfing experience. With its upscale amenities and picturesque desert landscape, the club ensures a luxurious and enjoyable outing for golf enthusiasts.",
      src: Img1,
      city: "Anthem",
    },
    {
      id: 5,
      title: "Aguila Golf Course",
      desc: "Aguila Golf Course in Phoenix, Arizona, features a challenging layout with stunning mountain views and well-manicured fairways. Known for its affordable rates and welcoming atmosphere, it provides an excellent golfing experience for players of all levels.",
      src: Img1,
      city: "Phoenix",
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
          <div className={styles.bottomii}>
            {data.map((y) => (
              <div key={y.id} className={styles.detailsBox}>
                <div className={styles.left}>
                  <Tab text={y.city} />
                  <h3 className={styles.titleii}>{y.title}</h3>
                  <p className={styles.descii}>{y.desc}</p>
                </div>
                <div className={styles.right}>
                  <div className={styles.imgContainerii}>
                    <Image src={y.src} alt='img' fill className={styles.img} />
                  </div>
                </div>
              </div>
            ))}
          </div>
      </LayoutWrapper>
    </section>
  );
};
export default CourseCollection;
