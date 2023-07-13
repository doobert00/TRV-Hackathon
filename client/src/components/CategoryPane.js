import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid";
import "./CategoryPane.css";

const getCategories = async (url) => {
  const res = await fetch(url, {
    method: "GET",
    mode: "cors",
  });
  return await res.json();
};

export default function CategoryPane() {
  const [categoryList, setCategories] = useState([]);

  useEffect(() => {
    getCategories("http://localhost:3000/api/categories").then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <div>
      <Container>
        {categoryList.map((category) => {
          return (
            <Row>
              <div className="catbtn">{category.name} </div>
            </Row>
          );
        })}
      </Container>
    </div>
  );
}
