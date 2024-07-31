import styles from "./Usp.module.css";
import Track from "../../../public/icons/arrow.svg";
import Solutions from "../../../public/icons/arrow.svg";
import Attention from "../../../public/icons/arrow.svg";
import Team from "../../../public/icons/arrow.svg";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";

const data = [
  {
    id: 1,
    usp: "Personalized Service",
    desc: "We tailor every package to meet your specific needs.",
    icon: <Team className={styles.icon} width={60} height={60} />,
  },
  {
    id: 2,
    usp: "Exclusive Partnerships",
    desc: "Enjoy access to the best golf courses in Arizona.",
    icon: <Attention className={styles.icon} width={60} height={60} />,
  },
  {
    id: 3,
    usp: "Expert Knowledge",
    desc: "Our team has extensive experience in the golf and travel industries.",
    icon: <Solutions className={styles.icon} width={60} height={60} />,
  },
  {
    id: 4,
    usp: "Proven Track Record of Success",
    desc: "A portfolio of successful projects and satisfied clients.",
    icon: <Track className={styles.icon} width={60} height={60} />,
  },
];

const Usp = () => {
  return (
    <>
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.top}>
              <h2 className={`${styles.heading} h2v3`}>Why Choose Us?</h2>
              <p className={styles.copy}>What sets us apart is our...</p>
            </div>
            <div className={styles.bottom}>
              {data.map((x) => (
                <div key={x.id} className={styles.card}>
                  {x.icon}
                  <div>
                    <h3 className={styles.usp}>{x.usp}</h3>
                    <p className={styles.desc}>{x.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </LayoutWrapper>
      </section>
    </>
  );
};
export default Usp;
