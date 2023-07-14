import React, { useState, useEffect } from "react";
import { Container } from "react-grid";

export default function CartView() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let tmp = [];
    for (let i = 0; i < parseInt(sessionStorage.getItem("num_entries")); i++) {
      tmp.push(JSON.parse(sessionStorage.getItem(i.toString())));
    }
    setItems([...tmp]);
  }, []);

  return (
    <div>
      {items.map((item) => (
        <p>
          <Link to={`/item/${item.id}`}>
            {item.name} : {item.price}
          </Link>
        </p>
      ))}
      <p> Cost: </p>
      <p> Buy Now Button</p>
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
