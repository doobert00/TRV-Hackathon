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
          {item.name} : {item.price}
        </p>
      ))}
    </div>
  );
}
