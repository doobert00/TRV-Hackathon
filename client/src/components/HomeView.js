import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid";
import "./HomeView.css";
import NA from "./NA.jpg";

export default function HomeView() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img style={{ width: 150, height: 125 }} src={NA} />
            Games
          </Col>
          <Col>
            <img style={{ width: 150, height: 125 }} src={NA} />
            Games
          </Col>
          <Col>
            <img style={{ width: 150, height: 125 }} src={NA} />
            Games
          </Col>
        </Row>
        <Row>
          <Col>
            <img style={{ width: 150, height: 125 }} src={NA} />
            Games
          </Col>
          <Col>
            <img style={{ width: 150, height: 125 }} src={NA} />
            Games
          </Col>
          <Col>
            <img style={{ width: 150, height: 125 }} src={NA} />
            Games
          </Col>
        </Row>
        <Row>
          <Col>
            <img style={{ width: 150, height: 125 }} src={NA} />
            Games
          </Col>
          <Col>
            <img style={{ width: 150, height: 125 }} src={NA} />
            Games
          </Col>
          <Col>
            <img style={{ width: 150, height: 125 }} src={NA} />
            Games
          </Col>
        </Row>
      </Container>
    </div>
  );
}
