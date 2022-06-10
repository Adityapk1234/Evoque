import styles from "../css/Marketplace.module.css";
import { Button } from "react-bootstrap";
const Heading = () => {
  return (
    <div>
      <div className={styles.rectangleDiv1} />
      <img className={styles.maskGroupIcon} alt="" src="mask-group.svg" />
      <div className={styles.welcomeToMarketplace}>
        <span>Welcome to </span>
        <b>marketplace</b>
        <span>!</span>
      </div>
      <div className={styles.indiasFirstProductsMarketp}>
        <p className={styles.indiasFirstProducts}>
          India’s first products marketplace with
        </p>
        <p
          className={styles.advancedTools}
        >{`advanced tools & apps to empower your every trade!
  `}</p>
      </div>
    </div>
  );
};

export default Heading;
