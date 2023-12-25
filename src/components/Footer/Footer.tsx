import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <LayoutWrapper>
        <ContentPadding>
          <footer className={styles.container}>
            <h2>Footer</h2>
          </footer>
        </ContentPadding>
      </LayoutWrapper>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.container}>
            <p>Logo and disclosures here</p>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </>
  );
};
export default Footer;
