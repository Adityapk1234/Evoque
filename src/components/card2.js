import styles from "../css/Marketplace.module.css";
import { Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
const Card2 = (props) => {
  return (
    <div className={styles.groupDiv5}>
      <div className={styles.rectangleDiv2} />
      <Button className={styles.frameButton5} variant="primary">
        View More Details
      </Button>
      <Button className={styles.frameButton4} variant="outline-primary">
        Open an Account
      </Button>
      <div className={styles.buyDirectFundsAtZeroCommi}>{props.pro.title}</div>
      <div className={styles.price100PerSmallcaseBuy}>
        <span className={styles.price}>Price: {props.pro.price} </span>
        <span className={styles.perSmallcaseBuy}>for lifetime</span>
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
      <div className={styles.rectangleDiv6} />
      <div className={styles.rectangleDiv4} />
      <img
        className={styles.blurLandingCorporate24660xIcon}
        alt=""
        src="blurlandingcorporate24660x406-20191205-04-27-30-1@2x.png"
      />
      <div className={styles.smallcasesAreInvestmentProd}>
        {props.pro.description}
      </div>
      <div className={styles.reviewsDiv}>(10 reviews)</div>
      <img className={styles.groupIcon7} alt="" src="group-62.svg" />
    </div>
  );
};

export default Card2;
