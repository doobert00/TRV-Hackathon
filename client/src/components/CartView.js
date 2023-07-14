import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const postOrder = async (items, cost) => {
  //POST the order
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
/*
{
    "date": "8/23/2022",
    "first_name": "Giselle",
    "last_name": "Flaune",
    "email": "gflaune0@wix.com",
    "addreess": "188 Briar Crest Court",
    "credit_card": "56022122569562380",
    "products": [
      10,
      10
    ],
    "price": "$151.26" //Compute cost sum on my end
}*/
