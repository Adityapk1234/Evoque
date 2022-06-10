import styles from "../css/Marketplace.module.css";
import { Button } from "react-bootstrap";
const Card1 = (props) => {
  return (
    <div className={styles.groupDiv4}>
      <div className={styles.rectangleDiv2} />
      <Button className={styles.frameButton3} variant="primary">
        View More Details
      </Button>
      <Button className={styles.frameButton4} variant="outline-primary">
        Open an Account
      </Button>
      <div className={styles.investInIdeasWithSmallCas}>{props.pro.title}</div>
      <div className={styles.price100PerSmallcaseBuy}>
        <span className={styles.price}>Price: {props.pro.price} </span>
        <span className={styles.perSmallcaseBuy}>per smallcase (buy)</span>
      </div>
      <div className={styles.offerPriceFreeForCustomer}>
        <span>
          <span>Offer Price: </span>
          <span className={styles.freeSpan}>{props.pro.offer_price}</span>
          <span className={styles.perSmallcaseBuy}> </span>
        </span>
        <span className={styles.perSmallcaseBuy}>
          <span>for customers</span>
        </span>
      </div>
      <div className={styles.rectangleDiv3} />
      <div className={styles.rectangleDiv4} />
      <div className={styles.smallcasesAreInvestmentProd}>
        {props.pro.description}
      </div>
    </div>
  );
};

export default Card1;
