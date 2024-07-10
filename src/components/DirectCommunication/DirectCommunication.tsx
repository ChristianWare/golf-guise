"use client";

import styles from "./DirectCommunication.module.css";
import Arrow from "../../../public/icons/arrow.svg";
import ContentPadding from "../ContentPadding/ContentPadding";

const DirectCommunication = () => {
  const data = [
    {
      title: "Benefit 1",
      description:
        "Personalize the guest experience by addressing individual preferences, special requests, and inquiries promptly.",
    },
    {
      title: "Benefit 2",
      description:
        "Personalize the guest experience by addressing individual preferences, special requests, and inquiries promptly.",
    },
    {
      title: "Benefit 3",
      description:
        "Personalize the guest experience by addressing individual preferences, special requests, and inquiries promptly.",
    },
    {
      title: "Benefit 4",
      description:
        "Personalize the guest experience by addressing individual preferences, special requests, and inquiries promptly.",
    },
    {
      title: "Benefit 5",
      description:
        "Personalize the guest experience by addressing individual preferences, special requests, and inquiries promptly.",
    },
    {
      title: "Benefit 6",
      description:
        "In the event of emergencies, maintenance issues, or unforeseen circumstances, direct communication enables owners to respond quickly, mitigate problems, and ensure guest comfort and safety.",
    },
  ] as const;
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <h3 className={styles.heading}>
          Benefits of a Golf Stay and Play package
        </h3>
        <p className={styles.copy}>
          Choosing a golf stay and play package comes with several benefits.
        </p>
      </div>
      <div className={styles.bottom}>
        {data.map((x, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconContainer}>
              <Arrow className={styles.icon} width={25} height={25} />
            </div>
            <div>
              <h3 className={styles.title}>{x.title}</h3>
              <p className={styles.desc}>{x.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default DirectCommunication;
