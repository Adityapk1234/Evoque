import styles from "../css/Marketplace.module.css";
import { Form } from "react-bootstrap";

const AllFilters = () => {
  return (
    <div className={styles.frameDiv}>
      <div className={styles.groupDiv2}>
        <div className={styles.allDiv}>All</div>
        <div className={styles.aboveDiv}>{`& above`}</div>
        <div className={styles.aboveDiv1}>{`& above`}</div>
        <div className={styles.aboveDiv2}>{`& above`}</div>
        <div className={styles.aboveDiv3}>{`& above`}</div>
        <div className={styles.developedByDiv}>Developed by</div>
        <div className={styles.groupDiv3}>
          <b className={styles.clearFilterB}>Clear filter</b>
        </div>
        <div className={styles.ratingByDiv}>Rating by</div>
        <div className={styles.applicationTypeDiv}>Application type</div>
        <img className={styles.ladotCircleIcon} alt="" src="ladotcircle.svg" />
        <Form.Check className={styles.ladotCircleFormCheck} type="radio" />
        <Form.Check className={styles.ladotCircleFormCheck1} type="radio" />
        <div className={styles.allDiv1}>All</div>
        <div className={styles.webBasedApplications}>
          Web based applications
        </div>
        <div className={styles.mobileApplicationsDiv}>Mobile applications</div>
        <img className={styles.ladotCircleIcon1} alt="" src="ladotcircle.svg" />
        <Form.Check className={styles.ladotCircleFormCheck2} type="radio" />
        <Form.Check className={styles.ladotCircleFormCheck3} type="radio" />
        <Form.Check className={styles.ladotCircleFormCheck4} type="radio" />
        <Form.Check className={styles.ladotCircleFormCheck5} type="radio" />
        <img className={styles.groupIcon1} alt="" src="group-61.svg" />
        <img className={styles.groupIcon2} alt="" src="group-58.svg" />
        <img className={styles.groupIcon3} alt="" src="group-59.svg" />
        <img className={styles.groupIcon4} alt="" src="group-60.svg" />
        <Form.Check className={styles.ladotCircleFormCheck6} type="radio" />
        <Form.Check className={styles.ladotCircleFormCheck7} type="radio" />
        <Form.Check className={styles.ladotCircleFormCheck8} type="radio" />
        <Form.Check className={styles.ladotCircleFormCheck9} type="radio" />
        <Form.Check className={styles.ladotCircleFormCheck10} type="radio" />
        <div className={styles.allDiv2}>All</div>
        <div className={styles.evoqueInnovativeLab}>Evoque Innovative Lab</div>
        <div className={styles.loremIpsumDiv}>Lorem Ipsum</div>
        <img className={styles.groupIcon5} alt="" src="group-168.svg" />
        <div className={styles.loremIpsumDiv1}>Lorem Ipsum</div>
        <div className={styles.loremIpsumDiv2}>Lorem Ipsum</div>
      </div>
    </div>
  );
};

export default AllFilters;
