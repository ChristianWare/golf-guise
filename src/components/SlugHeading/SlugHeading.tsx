import styles from "./SlugHeading.module.css";

const SlugHeading = ({ heading }: { heading: string }) => {
  return <h2 className={styles.heading}>{heading}</h2>;
};
export default SlugHeading;
