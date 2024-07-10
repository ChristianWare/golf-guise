"use client";

import styles from "./DirectCommunication.module.css";
import Arrow from "../../../public/icons/arrow.svg";
import ContentPadding from "../ContentPadding/ContentPadding";

const DirectCommunication = () => {
  const data = [
    {
      title: "Personalized Guest Experience",
      description:
        "Personalize the guest experience by addressing individual preferences, special requests, and inquiries promptly.",
    },
    {
      title: "Building Relationships",
      description:
        "Foster relationships with guests by creating a sense of trust and rapport, encouraging repeat bookings, referrals, and positive reviews.",
    },
    {
      title: "Clarifying Expectations",
      description:
        "Eliminate misunderstandings by clearly communicating booking policies, house rules, check-in/check-out procedures, and property details.",
    },
    {
      title: "Handling Guest Feedback",
      description:
        "Get feedback directly from guests during their stay or post-stay. Address concerns promptly, and demonstrate responsiveness.",
    },
    {
      title: "Upselling Opportunities",
      description:
        "Upsell additional services, upgrades, or experiences directly to guests through personalized communication, thus increasing revenue per booking.",
    },
    {
      title: "Resolving Issues",
      description:
        "In the event of emergencies, maintenance issues, or unforeseen circumstances, direct communication enables owners to respond quickly, mitigate problems, and ensure guest comfort and safety.",
    },
  ] as const;
  return (
      <section className={styles.container}>
        <div className={styles.top}>
          <h2 className={styles.heading}>Benefits</h2>
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
