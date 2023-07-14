import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-grid";
import { useNavigate } from "react-router-dom";
import "./CategoryPane.css";

const getCategories = async (url) => {
  const res = await fetch(url, {
    method: "GET",
    mode: "cors",
  });
  return await res.json();
};

export default function CategoryPane() {
  const nav = useNavigate();
  const handleClick = useCallback(
    (id) => nav(`/category/${id}`, { replace: true }),
    [nav]
  );
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
              <div className="catbtn" onClick={() => handleClick(category.id)}>
                {category.name}
              </div>
            </Row>
          );
        })}
      </Container>
    </div>
  );
}
