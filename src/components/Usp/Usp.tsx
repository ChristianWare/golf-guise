import styles from "./Usp.module.css";
import Track from "../../../public/icons/track.svg";
import Solutions from "../../../public/icons/solutions.svg";
import Attention from "../../../public/icons/attention.svg";
import Team from "../../../public/icons/team.svg";
import LayoutWrapper from "../LayoutWrapper";
import ScrollHorizontalText from "../ScrollHorizontalText/ScrollHorizontalText";

const data = [
  {
    id: 1,
    usp: "Expert Team of Developers",
    desc: "Skilled professionals with a passion for web design and development.",
    icon: <Team className={styles.icon} width={60} height={60} />,
  },
  {
    id: 2,
    usp: "Personalized Attention",
    desc: "Building strong relationships with clients to understand their business, goals, and audience.",
    icon: <Attention className={styles.icon} width={60} height={60} />,
  },
  {
    id: 3,
    usp: "Innovative & Effective Solutions",
    desc: "Combining the latest technology with creative ideas for top-notch results.",
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
