import Button from "../Button/Button";
import styles from "./IndividualPackage.module.css";

type PackageProps = {
  packageData: {
    title: string;
    price: string;
    description: string;
    features: readonly string[]; // Allow readonly array
    golfPerkTitle: string;
    golfPerkDescription: string;
    button: {
      text: string;
      href: string;
    };
  };
};

const IndividualPackage: React.FC<PackageProps> = ({ packageData }) => {
  return (
    <article>
      <div className={styles.bottom}>
        <div className={styles.right}>
          <div className={styles.rightTop}>
            <h3 className={styles.title}>
              {packageData.title} 
              <br />
              {packageData.price}
            </h3>
            {/* <span className={styles.priceii}>{packageData.price}</span> */}
            <p className={styles.copyii}>{packageData.description}</p>
          </div>
          <ul className={styles.list}>
            {packageData.features.map((feature, index) => (
              <li key={index} className={styles.listItem}>
                {feature}
              </li>
            ))}
          </ul>
          <div className={styles.rightBottom}>
            <div className={styles.rb1}>
              <h4>{packageData.golfPerkTitle}</h4>
              <p className={styles.copyiii}>
                {packageData.golfPerkDescription}
              </p>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Button
              btnType='primaryiii'
              text={packageData.button.text}
              href='/contact'
              iconColor='white'
            />
          </div>
        </div>
      </div>
    </article>
  );
};
export default IndividualPackage;
