import styles from "../css/Marketplace.module.css";
import { Button } from "react-bootstrap";
const Foter = () => {
  return (
    <>
      <img className={styles.groupIcon} alt="" src="group-153.svg" />
      <div className={styles.takeAdvantageOfTheVarious}>
        Take advantage of the various products to build your own customized
        trading strategies.
      </div>
      <Button className={styles.frameButton2} variant="outline-primary">
        Open new account
      </Button>
      <div className={styles.joinTheFamilyToday}>
        <span>Join the </span>
        <b>family</b>
        <span> today!</span>
      </div>
    </>
  );
};

export default Foter;
