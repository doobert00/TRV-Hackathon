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
  const [category, setCategory] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    get(`http://localhost:3000/api/categories/${id}`).then((res) => {
      setCategory(res);
      console.log(res);
    });
  });
  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);
  const [item3, setItem3] = useState([]);
  const [item4, setItem4] = useState([]);
  const [item5, setItem5] = useState([]);
  const [item6, setItem6] = useState([]);
  /*
  useEffect(() => {
    console.log(category);
    get(`http://localhost:3000/api/products/${category.products[1]}`).then(
      (res) => {
        setItem1(res);
      }
    );
  }, []); 
  useEffect(() => {
    get(
      `http://localhost:3000/api/products/${category.products[index + 1]}`
    ).then((res) => {
      setItem2(res);
    });
  }, []);
  useEffect(() => {
    get(
      `http://localhost:3000/api/products/${category.products[index + 2]}`
    ).then((res) => {
      setItem3(res);
    });
  }, []);
  useEffect(() => {
    get(
      `http://localhost:3000/api/products/${category.products[index + 3]}`
    ).then((res) => {
      setItem4(res);
    });
  }, []);
  useEffect(() => {
    get(
      `http://localhost:3000/api/products/${category.products[index + 4]}`
    ).then((res) => {
      setItem5(res);
    });
  }, []);
  useEffect(() => {
    get(
      `http://localhost:3000/api/products/${category.products[index + 5]}`
    ).then((res) => {
      setItem6(res);
    });
  }, []);*/
  return (
    <div>
      {" "}
      {/*
      <Container>
        <Row>
          <Col>
            <Row>
              <img style={{ width: 150, height: 125 }} src={NA} />
            </Row>
            <Row>
              <Link to={`/item/${item1.id}`}>{item1.name}</Link>
            </Row>
            <Row> {item1.price}</Row>
          </Col>
          <Col>
            <Row>
              <img style={{ width: 150, height: 125 }} src={NA} />
            </Row>
            <Row>
              <Link to={`/item/${item2.id}`}>{item2.name}</Link>
            </Row>
            <Row> {item2.price}</Row>
          </Col>
          <Col>
            <Container>
              <Row>
                <img style={{ width: 150, height: 125 }} src={NA} />
              </Row>
              <Row>
                <Link to={`/item/${item3.id}`}>{item3.name}</Link>
              </Row>
              <Row> {item3.price}</Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <img style={{ width: 150, height: 125 }} src={NA} />
            </Row>
            <Row>
              <Link to={`/item/${item4.id}`}>{item4.name}</Link>
            </Row>
            <Row> {item4.price}</Row>
          </Col>
          <Col>
            <Row>
              <img style={{ width: 150, height: 125 }} src={NA} />
            </Row>
            <Row>
              <Link to={`/item/${item5.id}`}>{item5.name}</Link>
            </Row>
            <Row> {item5.price}</Row>
          </Col>
          <Col>
            <Row>
              <img style={{ width: 150, height: 125 }} src={NA} />
            </Row>
            <Row>
              {" "}
              <Link to={`/item/${item6.id}`}>{item6.name}</Link>
            </Row>
            <Row> {item6.price}</Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="leftbtn"></div>
          </Col>
          <Col>
            <div className="rightbtn"></div>
          </Col>
        </Row>
      </Container>*/}
    </div>
  );
}
