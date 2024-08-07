"use client";

import styles from "./Mission.module.css";
import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import { golfCourseData } from "@/lib/data";

const Mission = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>Course Details</h2>
        </div>
        <div className={styles.box}>
          {golfCourseData.map((x) => (
            <div
              key={x.id}
              className={styles.courseDetailsContainer}
              id={x.idData}
            >
              <div className={styles.bottom}>
                <div className={styles.left}>
                  <h3 className={styles.courseName}>{x.courseName}</h3>
                  <div className={styles.imgContainer}>
                    <Image
                      src={x.src}
                      alt=''
                      layout='fill'
                      objectFit='cover'
                      className={styles.img}
                    />
                  </div>
                </div>
                <div className={styles.right}>
                  {x.moredata.map((y) => (
                    <div key={y.id} className={styles.card}>
                      <h4 className={styles.title}>{y.heading}</h4>
                      <p className={styles.description}>{y.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
      </LayoutWrapper>
    </section>
  );
};
export default Mission;
