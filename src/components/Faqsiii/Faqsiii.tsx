"use client";

import styles from "./Faqsiii.module.css";
import { useState } from "react";
import Plus from "../../../public/icons/arrow.svg";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Image from "next/image";
import Img from "../../../public/images/img1.png";

const Faqsiii = () => {
  const [selected, setSelected] = useState(0);

  const toggle = (i: any) => {
    setSelected(i);
  };

  const faqs = [
    {
      id: 1,
      question: "What's included in the Luxury Golf Retreat package?",
      answer:
        "The Luxury Golf Retreat package includes 5 nights at a luxury resort, 4 rounds of golf at premier courses, daily breakfast and dinner, and access to spa treatments and facilities.",
    },
    {
      id: 2,
      question: "Are there any family-friendly golf packages available?",
      answer:
        "Yes, our Family Golf Fun package is designed for all ages and includes 4 nights at a family resort, 3 rounds of golf at family-friendly courses, kids' golf clinics and activities, and daily breakfast and dinner.",
    },
    {
      id: 3,
      question: "How can I book a golf vacation package on your website?",
      answer:
        "You can book a golf vacation package by visiting our Booking page, filling out the form with your details, and selecting your preferred package. Alternatively, you can contact us directly via phone or email to assist with your booking.",
    },
    {
      id: 4,
      question: "What destinations are available for golf vacations?",
      answer:
        "We offer golf vacation packages in several beautiful destinations in Arizona, including Scottsdale, Phoenix, and Tucson. Each destination features world-class golf courses and luxurious accommodations.",
    },
  ];

  return (
    <section className={styles.container} id='faq'>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.sectionIntroContainer}>
              <h2 className={styles.heading}>
                You ask, <br /> we answer
              </h2>
            </div>
            <p className={styles.copy}>
              Here are some common questions asked by potential clients. If you
              do not see your question here feel free to reach out.
            </p>
            {/* <div className={styles.imgContainer}>
              <Image src={Img} alt='' fill className={styles.img} />
            </div> */}
          </div>
          <div className={styles.bottom}>
            {faqs.map((x, i) => (
              <div
                key={x.id}
                className={`${styles.qaContainer} ${
                  selected === i ? styles.active : ""
                }`}
                onClick={() => toggle(i)}
              >
                <div className={styles.headingArrowContainer}>
                  {selected === i ? (
                    <Plus className={styles.iconFlip} width={35} height={35} />
                  ) : (
                    <Plus className={styles.icon} width={30} height={30} />
                  )}
                  <h3 className={styles.question} lang='en'>
                    {x.question}
                  </h3>
                </div>
                <div
                  className={
                    selected === i
                      ? styles.answerContainer + " " + styles.show
                      : styles.answerContainer
                  }
                >
                  <div className={styles.answerbox}>
                    <div></div>
                    <p className={styles.answer} lang='en'>
                      {x.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Faqsiii;
