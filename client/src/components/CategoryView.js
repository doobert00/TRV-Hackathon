import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./CategoryView.css";

const get = async (url) => {
  const res = await fetch(url, {
    method: "GET",
    mode: "cors",
  });
  return await res.json();
};

export default function CategoryView() {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    get(`http://localhost:3000/api/categories/${id}`)
      .then((res) => {
        return res;
      })
      .then((res) => {
        let usedIndices = [];
        setItems([]);
        for (let i = 0; i < res.products.length; i++) {
          if (!usedIndices.includes(i)) {
            usedIndices.push(i);
            let x = res.products[i];
            get(`http://localhost:3000/api/products/${x}`).then((prod) => {
              let tmp = items;
              tmp.push(prod);
              setItems([...new Set(tmp)]);
            });
          }
        }
      });
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
    </div>
  );
}
