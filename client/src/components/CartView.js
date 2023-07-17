import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const DATE = "1/1/11";
const FIRST_NAME = "John";
const LAST_NAME = "Doe";
const EMAIL = "jd@email.gov";
const ADDRESS = "1 Email blvd, Saskatoon Saskatchewan, Canada";
const CREDIT_CARD = "1111222233334444";

const postOrder = async (items, cost) => {
  const res = await fetch("http://localhost:3000/api/orders", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      date: DATE,
      first_name: FIRST_NAME,
      last_name: LAST_NAME,
      address: ADDRESS,
      credit_card: CREDIT_CARD,
      email: EMAIL,
      cart: [1],
      price: cost.toString(),
    }),
  });
  console.log(res);
  sessionStorage.clear();
  sessionStorage.setItem("num_entries", 0);
};

export default function CartView() {
  const [items, setItems] = useState([]);
  const [cost, setCost] = useState(0);

  const nav = useNavigate();
  const handleNav = useCallback(() => nav(`/`, { replace: true }), [nav]);
  const handleCheckout = async () => {
    postOrder(items, cost);
    handleNav();
  };

  useEffect(() => {
    let tmp = [];
    let tmpCost = 0;
    for (let i = 0; i < parseInt(sessionStorage.getItem("num_entries")); i++) {
      tmp.push(JSON.parse(sessionStorage.getItem(i.toString())));
      tmpCost += parseFloat(tmp[i].price.substring(1));
    }
    setItems([...tmp]);
    setCost(tmpCost);
  }, []);

  return (
    <div>
      {items.map((item) => (
        <p>
          <Link to={`/item/${item.id}`}>
            {item.name}: {item.price}
          </Link>
        </p>
      ))}
      <p> Cost: ${cost}</p>
      <input
        type={"button"}
        value="Check Out"
        onClick={() => handleCheckout()}
      />
    </div>
  );
}
