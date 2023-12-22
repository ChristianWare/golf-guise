import ContentPadding from "../ContentPadding/ContentPadding";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <ContentPadding>
        <h2>Footer</h2>
      </ContentPadding>
    </footer>
  );
};
export default Footer;
