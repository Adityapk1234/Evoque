import styles from "../css/Marketplace.module.css";
import { Button } from "react-bootstrap";
const Card4 = () => {
  return (
    <div className={styles.groupDiv8}>
      <div className={styles.rectangleDiv2} />
      <Button className={styles.frameButton5} variant="primary">
        View More Details
      </Button>
      <Button className={styles.frameButton4} variant="outline-primary">
        Open an Account
      </Button>
      <div className={styles.buyDirectFundsAtZeroCommi}>
        Intraday based Semi Algo Trading Platform
      </div>
      <div className={styles.price100PerSmallcaseBuy}>
        <span className={styles.price}>Price: ₹ 399 </span>
        <span className={styles.perSmallcaseBuy}>per month</span>
      </div>
      <div className={styles.offerPriceFreeForCustomer}>
        <span>
          <span className={styles.offerPrice}>Offer Price: </span>
          <span className={styles.freeSpan}>Free</span>
          <span className={styles.perSmallcaseBuy}> </span>
        </span>
        <span className={styles.perSmallcaseBuy}>
          <span>6 days trial pack</span>
        </span>
      </div>
      <div className={styles.rectangleDiv12} />
      <div className={styles.rectangleDiv4} />
      <img
        className={styles.blurLandingCorporate24660xIcon}
        alt=""
        src="blurlandingcorporate24660x406-20191205-04-27-30-12@2x.png"
      />
      <div className={styles.smallcasesAreInvestmentProd}>
        Optimum gives Buy above and Sell below levels for Stock Cash, Futures
        and MCX Markets.
      </div>
      <div className={styles.reviewsDiv}>(0 reviews)</div>
      <img className={styles.groupIcon7} alt="" src="group-622.svg" />
    </div>
  );
};
export default Card4;
