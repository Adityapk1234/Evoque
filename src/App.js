import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { Marketplace } from "./Marketplace";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [card1, setCard1] = useState([]);
  const [card2, setCard2] = useState([]);
  const [card3, setCard3] = useState([]);

  useEffect(() => {
    fetch(
      "https://18ebbuf8l8.execute-api.ap-south-1.amazonaws.com/demo/api/v3/user/marketplace/search",
      {
        method: "POST",
        body: JSON.stringify({ page_num: 1, text: "test" }),
        headers: {
          "Content-Type": "application/json",
          "Access-Token":
            "eyJhbGciOiJIUzUxMiIsImlhdCI6MTYwODEwMDI4MCwiZXhwIjoxNjE1ODc2MjgwfQ.eyJ0eXBlIjozLCJpZCI6MTQ5MzMsImNyZWF0ZWQiOiIyMDIwLTEyLTE2IDA2OjMxOjIwLjczMTk2NiJ9.Ef001xBUX_ZPsgvGWCou9sUa6Q2BV9jvPWZZsnwE8qB3_IDTGaSNV0d0lmcuWab2FwEUQ3GouA9LVdd7ExmkvQ",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(1, data.data.products);
        setCard1(data.data.products);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://18ebbuf8l8.execute-api.ap-south-1.amazonaws.com/demo/api/v3/user/marketplace/search",
      {
        method: "POST",
        body: JSON.stringify({ page_num: 2, text: "test" }),
        headers: {
          "Content-Type": "application/json",
          "Access-Token":
            "eyJhbGciOiJIUzUxMiIsImlhdCI6MTYwODEwMDI4MCwiZXhwIjoxNjE1ODc2MjgwfQ.eyJ0eXBlIjozLCJpZCI6MTQ5MzMsImNyZWF0ZWQiOiIyMDIwLTEyLTE2IDA2OjMxOjIwLjczMTk2NiJ9.Ef001xBUX_ZPsgvGWCou9sUa6Q2BV9jvPWZZsnwE8qB3_IDTGaSNV0d0lmcuWab2FwEUQ3GouA9LVdd7ExmkvQ",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(2, data.data.products);
        setCard2(data.data.products);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://18ebbuf8l8.execute-api.ap-south-1.amazonaws.com/demo/api/v3/user/marketplace/search",
      {
        method: "POST",
        body: JSON.stringify({ page_num: 3, text: "test" }),
        headers: {
          "Content-Type": "application/json",
          "Access-Token":
            "eyJhbGciOiJIUzUxMiIsImlhdCI6MTYwODEwMDI4MCwiZXhwIjoxNjE1ODc2MjgwfQ.eyJ0eXBlIjozLCJpZCI6MTQ5MzMsImNyZWF0ZWQiOiIyMDIwLTEyLTE2IDA2OjMxOjIwLjczMTk2NiJ9.Ef001xBUX_ZPsgvGWCou9sUa6Q2BV9jvPWZZsnwE8qB3_IDTGaSNV0d0lmcuWab2FwEUQ3GouA9LVdd7ExmkvQ",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(3, data.data.products);
        setCard3(data.data.products);
      });
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<Marketplace card1={card1} card2={card2} card3={card3} />}
      />
    </Routes>
  );
}
export default App;
