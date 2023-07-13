import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid";

const getCategories = async (url) => {
  const res = await fetch(url, {
    method: "GET",
    mode: "cors",
  });
  return await res.json();
};

export default function CategoryPane() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories("http://localhost:3000/api/categories").then(
      (categoryList) => {
        console.log(categoryList);
        setCategories(categoryList);
      }
    );
  }, []);
  return <div> {categories.length}</div>;
}
