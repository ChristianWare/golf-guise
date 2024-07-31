"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./ContactDetails.module.css";
import Image from "next/image";
import Img from "../../../public/images/house24.png";
import SocialsContainer from "../SocialsContainer/SocialsContainer";
import Link from "next/link";

const ContactDetails = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <svg
              width='0'
              height='0'
              xmlns='http://www.w3.org/2000/svg'
              version='1.1'
            >
              <defs>
                <filter id='goo'>
                  <feGaussianBlur
                    in='SourceGraphic'
                    stdDeviation='5'
                    result='blur'
                  />
                  <feColorMatrix
                    in='blur'
                    mode='matrix'
                    values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
                    result='goo'
                  />
                  <feComposite in='SourceGraphic' in2='goo' operator='atop' />
                </filter>
              </defs>
            </svg>
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
                  623-632-6780
                </Link>
              </div>
              <div className={styles.box}>
                <h2 className={styles.title}>Email</h2>
                <Link
                  href='mailto:fontsandfooters@gmail.com'
                  className={styles.detail}
                >
                  fontsandfooters@gmail.com
                </Link>
              </div>
              <div className={styles.box}>
                <h2 className={styles.title}>Calendly</h2>
                <Link
                  href='https://calendly.com/fontsandfooters'
                  target='_blank'
                  className={styles.detail}
                >
                  https://calendly.com/fontsandfooters
                </Link>
              </div>
              <div className={styles.box}>
                <h2 className={styles.title}>Facebook</h2>
                <Link
                  href='https://www.facebook.com/fontsandfooters'
                  target='_blank'
                  className={styles.detail}
                >
                  facebook.com/fontsandfooters
                </Link>
              </div>
            </div>
            <div className={styles.bottom}>
              <SocialsContainer />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ContactDetails;
