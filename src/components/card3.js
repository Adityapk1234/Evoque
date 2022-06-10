import styles from "../css/Marketplace.module.css";
import { Button } from "react-bootstrap";
const Card3 = () => {
  return (
    <div className={styles.groupDiv6}>
      <div className={styles.rectangleDiv2} />
      <Button className={styles.frameButton5} variant="primary">
        View More Details
      </Button>
      <Button className={styles.frameButton4} variant="outline-primary">
        Open an Account
      </Button>
      <div className={styles.indiasFirstOptionTradingP}>
        India's First Option trading Platform
      </div>
      <div className={styles.price100PerSmallcaseBuy}>
        <span className={styles.price}>Price: ₹ 399 </span>
        <span className={styles.perSmallcaseBuy}>per month</span>
      </div>
      <div className={styles.offerPriceFreeForCustomer}>
        <span>
          <span>Offer Price: </span>
          <span className={styles.freeSpan}>₹</span>
          <span className={styles.offerPrice}> </span>
          <span className={styles.freeSpan}>199</span>
          <span className={styles.perSmallcaseBuy}> </span>
        </span>
        <span className={styles.perSmallcaseBuy}>
          <span>for customers</span>
        </span>
      </div>
      <div className={styles.rectangleDiv9} />
      <div className={styles.rectangleDiv4} />
      <img
        className={styles.blurLandingCorporate24660xIcon}
        alt=""
        src="blurlandingcorporate24660x406-20191205-04-27-30-11@2x.png"
      />
      <div className={styles.groupDiv7}>
        <div className={styles.frameDiv2}>
          <div className={styles.onOfferDiv}>On offer</div>
        </div>
      </div>
      <div className={styles.smallcasesAreInvestmentProd}>
        You can trade options just by knowing the stock and its direction.
      </div>
      <div className={styles.reviewsDiv}>(20 reviews)</div>
      <img className={styles.groupIcon7} alt="" src="group-621.svg" />
    </div>
  );
};

export default Card3;
