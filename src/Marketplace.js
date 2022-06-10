import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  Dropdown,
  DropdownButton,
  SplitButton,
} from "react-bootstrap";
import AllFilters from "./components/allFilters";
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import Card3 from "./components/card3";
import Card4 from "./components/card4";
import DropDownButtons from "./components/dropDownButton";
import Foter from "./components/footer";
import Heading from "./components/heading";
import Navigations from "./components/navigator";
import Paginat from "./components/pagination";
import Search from "./components/search";
import styles from "./css/Marketplace.module.css";

export const Marketplace = (props) => {
  return (
    <div className={styles.marketplaceDiv}>
      <img className={styles.ellipseIcon} alt="" src="ellipse-4.svg" />
      <Navigations />
      <Heading />
      <Search />
      <DropDownButtons />
      <AllFilters />

      {props.card1.map((pro) => (
        <Card1 key={pro.id} pro={pro} />
      ))}

      <Paginat />

      <img className={styles.ellipseIcon1} alt="" src="ellipse-15.svg" />
      <img className={styles.groupIcon6} alt="" src="group-113.svg" />

      {props.card2.map((pro) => (
        <Card2 key={pro.id} pro={pro} />
      ))}
      <Card3 />
      <Card4 />
      <div className={styles.lineDiv} />
      <div className={styles.groupDiv10}>
        <img
          className={styles.blurLandingCorporate24660xIcon3}
          alt=""
          src="blurlandingcorporate24660x406-20191205-04-27-30-13@2x.png"
        />
        <div className={styles.reviewsDiv3}>(20 reviews)</div>
        <img className={styles.groupIcon10} alt="" src="group-621.svg" />
        <div className={styles.groupDiv11}>
          <div className={styles.frameDiv2}>
            <div className={styles.onOfferDiv}>Free</div>
          </div>
        </div>
      </div>
      <div className={styles.evoqueInnovativeLab1}>Evoque Innovative Lab</div>
      <img className={styles.groupIcon11} alt="" src="group-167.svg" />
      <img className={styles.groupIcon12} alt="" src="group-167.svg" />
      <img className={styles.groupIcon13} alt="" src="group-169.svg" />
      <img className={styles.groupIcon14} alt="" src="group-169.svg" />
      <Foter />
    </div>
  );
};
