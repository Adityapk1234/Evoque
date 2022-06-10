import { DropdownButton } from "react-bootstrap";
import styles from "../css/Marketplace.module.css";
const DropDownButtons = () => {
  return (
    <div className={styles.frameDiv1}>
      <DropdownButton
        className={styles.frameDropdownButton}
        title="Newly added"
        variant="primary"
        align="start"
        drop="down"
      >
        {" "}
      </DropdownButton>
      <b className={styles.sortBy}>Sort by:</b>
    </div>
  );
};

export default DropDownButtons;
