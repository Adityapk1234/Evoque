import styles from "../css/Marketplace.module.css";
import { Button } from "react-bootstrap";
const Navigations = () => {
  return (
    <div>
      <div className={styles.rectangleDiv} />
      <div className={styles.groupDiv}>
        <a className={styles.about}>About</a>
        <a className={styles.marketplace}>Marketplace</a>
        <a className={styles.resourcesA}>Resources</a>
        <a className={styles.contact}>Contact</a>
      </div>
      <div className={styles.groupDiv1}>
        <Button className={styles.frameButton} variant="primary">
          Sign Up
        </Button>
        <Button className={styles.frameButton1} variant="outline-primary">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navigations;
