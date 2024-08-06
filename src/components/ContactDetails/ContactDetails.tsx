"use client";

import styles from "./ContactDetails.module.css";
import Image from "next/image";
import Img from "../../../public/images/img1.png";

import Link from "next/link";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";

const ContactDetails = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.miscContainer}>
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
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <div className={styles.box}>
                <h2 className={styles.title}>Phone</h2>
                <Link href='tel:+62363267800' className={styles.detail}>
                  623-632-6678
                </Link>
              </div>
              <div className={styles.box}>
                <h2 className={styles.title}>Email</h2>
                <Link href='mailto:azgolf@gmail.com' className={styles.detail}>
                  azgolf@gmail.com
                </Link>
              </div>
              <div className={styles.box}>
                <h2 className={styles.title}>Calendly</h2>
                <Link
                  href='https://calendly.com/azgolf'
                  target='_blank'
                  className={styles.detail}
                >
                  https://calendly.com/azgolf
                </Link>
              </div>
              <div className={styles.box}>
                <h2 className={styles.title}>Facebook</h2>
                <Link
                  href='https://www.facebook.com/azgolf'
                  target='_blank'
                  className={styles.detail}
                >
                  facebook.com/azgolf
                </Link>
              </div>
            </div>
            <div className={styles.bottom}></div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ContactDetails;

