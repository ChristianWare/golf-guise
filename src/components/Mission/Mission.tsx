"use client";

import styles from "./Mission.module.css";
import Design from "../../../public/icons/arrow.svg";
import Reminders from "../../../public/icons/arrow.svg";
import Clock from "../../../public/icons/arrow.svg";
import Card from "../../../public/icons/arrow.svg";
import Image from "next/image";
import Img1 from "../../../public/images/img1.png";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";

const Mission = () => {
  const data = [
    {
      id: 1,
      icon: <Clock width={25} height={25} className={styles.icon} />,
      title: "We-Ko-Pa Golf Club",
      desc: "The We-Ko-Pa Golf Club in Arizona offers two award-winning courses set amidst the stunning Sonoran Desert landscape, providing a challenging yet scenic golfing experience. Renowned for its pristine conditions and breathtaking views, the club promises an unforgettable outing for golf enthusiasts of all levels.",
      src: Img1,
      city: "Fountain Hills",
    },
    {
      id: 2,
      icon: <Reminders width={25} height={25} className={styles.icon} />,
      title: "Dove Valley Ranch Golf Club",
      desc: "Dove Valley Ranch Golf Club in Arizona features a championship course designed by Robert Trent Jones Jr., blending natural desert beauty with a challenging layout. Known for its well-maintained greens and picturesque surroundings, the club offers a memorable golfing experience for players of all skill levels.",
      src: Img1,
      city: "Cave Creek",
    },
    {
      id: 3,
      title: "Ancala Country Club",
      icon: <Design width={25} height={25} className={styles.icon} />,
      desc: "Ancala Country Club in Scottsdale, Arizona, boasts a beautifully designed course by Pete Dye, offering stunning views of the McDowell Mountains. With its exceptional facilities and challenging play, the club provides a premier golfing experience in a luxurious setting.",
      src: Img1,
      city: "Scottsdale",
    },
    {
      id: 4,
      title: "Anthem Golf and Country Club",
      icon: <Card width={25} height={25} className={styles.icon} />,
      desc: "Anthem Golf and Country Club in Anthem, Arizona, offers two distinct Greg Nash-designed courses that provide both a challenging and scenic golfing experience. With its upscale amenities and picturesque desert landscape, the club ensures a luxurious and enjoyable outing for golf enthusiasts.",
      src: Img1,
      city: "Anthem",
    },
  ];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>Course Details</h2>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt=''
                layout='fill'
                objectFit='cover'
                className={styles.img}
              />
            </div>
            <div className={styles.z3}></div>
          </div>
          <div className={styles.right}>
            {data.map((x, index) => (
              <div key={index} className={styles.card}>
                {x.icon}
                <h4 className={styles.title}>{x.title}</h4>
                <p className={styles.description}>{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Mission;
