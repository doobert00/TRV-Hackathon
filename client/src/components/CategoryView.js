import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, Row, Col } from "react-grid";
import { Link } from "react-router-dom";
import NA from "./NA.jpg";
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
  const [index, setIndex] = useState(0);

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
              tmp = [...new Set(tmp)];
              setItems([...tmp]);
            });
          }
        }
      });
  }, []);

  return (
    <div>
      <Container style={{ display: "flex", flexWrap: "wrap" }}>
        {items.map((item) => (
          <p>{item.name}</p>
        ))}
      </Container>
    </div>
  );
}
