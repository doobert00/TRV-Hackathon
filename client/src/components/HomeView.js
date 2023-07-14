import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid";
import { Link } from "react-router-dom";
import "./HomeView.css";
import NA from "./NA.jpg";

const MAX_DISPLAY_ITEMS = 6;
const NUM_ROWS = 2;
const NUM_COLS = 3;

const getItem = async (url) => {
  const res = await fetch(url, {
    method: "GET",
    mode: "cors",
  });
  return await res.json();
};

export default function HomeView() {
  const [items, setItems] = useState([]);
  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);
  const [item3, setItem3] = useState([]);
  const [item4, setItem4] = useState([]);
  const [item5, setItem5] = useState([]);
  const [item6, setItem6] = useState([]);
  useEffect(() => {
    getItem(`http://localhost:3000/api/products/1`).then((res) => {
      setItem1(res);
    });
  }, []);
  useEffect(() => {
    getItem(`http://localhost:3000/api/products/2`).then((res) => {
      setItem2(res);
    });
  }, []);
  useEffect(() => {
    getItem(`http://localhost:3000/api/products/3`).then((res) => {
      setItem3(res);
    });
  }, []);
  useEffect(() => {
    getItem(`http://localhost:3000/api/products/4`).then((res) => {
      setItem4(res);
    });
  }, []);
  useEffect(() => {
    getItem(`http://localhost:3000/api/products/5`).then((res) => {
      setItem5(res);
    });
  }, []);
  useEffect(() => {
    getItem(`http://localhost:3000/api/products/6`).then((res) => {
      setItem6(res);
    });
  }, []);
  useEffect(() => {
    for (let i = 0; i < MAX_DISPLAY_ITEMS; i++) {
      getItem(`http://localhost:3000/api/products/${i + 1}`).then((res) => {
        let tmp = [...items];
        tmp[i] = res;
        setItems(tmp);
      });
    }
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Row>
              <img style={{ width: 150, height: 125 }} src={NA} />
            </Row>
            <Row>
              <Link to="/item/1">{item1.name}</Link>
            </Row>
            <Row> {item1.price}</Row>
          </Col>
          <Col>
            <Row>
              <img style={{ width: 150, height: 125 }} src={NA} />
            </Row>
            <Row>
              <Link to="/item/2">{item2.name}</Link>
            </Row>
            <Row> {item2.price}</Row>
          </Col>
          <Col>
            <Container>
              <Row>
                <img style={{ width: 150, height: 125 }} src={NA} />
              </Row>
              <Row>
                <Link to="/item/3">{item3.name}</Link>
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
              {" "}
              <Link to="/item/4">{item4.name}</Link>
            </Row>
            <Row> {item4.price}</Row>
          </Col>
          <Col>
            <Row>
              <img style={{ width: 150, height: 125 }} src={NA} />
            </Row>
            <Row>
              <Link to="/item/5">{item5.name}</Link>
            </Row>
            <Row> {item5.price}</Row>
          </Col>
          <Col>
            <Row>
              <img style={{ width: 150, height: 125 }} src={NA} />
            </Row>
            <Row>
              {" "}
              <Link to="/item/6">{item6.name}</Link>
            </Row>
            <Row> {item6.price}</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
