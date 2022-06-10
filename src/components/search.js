import styles from "../css/Marketplace.module.css";
import { Form } from "react-bootstrap";
import { useState } from "react";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState();

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };
  return (
    <Form.Group className={styles.frameFormGroup}>
      <Form.Control
        type="text"
        placeholder="Search for products"
        onChange={handleOnChange}
        value={searchTerm}
      />
    </Form.Group>
  );
};
export default Search;
