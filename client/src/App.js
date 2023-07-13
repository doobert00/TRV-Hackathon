import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-grid";
import "./App.css";

import ItemView from "./components/ItemView";
import CategoryView from "./components/CategoryView";
import HomeView from "./components/HomeView.js";
import CategoryPane from "./components/CategoryPane";

import logo from "./components/logo.png";
function App() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <Container>
        <div className="top">
          <Row>
            <Col>
              <img style={{ width: 150, height: 125 }} src={logo} />
            </Col>
            <Col>
              <input
                type="text"
                placeholder="Search..."
                onChange={(event) => setSearchInput(event.target.value)}
                value={searchInput}
              />
            </Col>
          </Row>
        </div>
        <Row>
          <div className="left">
            <Col>
              <CategoryPane />
            </Col>
          </div>
          <div className="center">
            <Col>
              <Routes>
                <Route exact path="/" element={<HomeView />} />
                <Route path="/item/:id" element={<ItemView />} />
              </Routes>
            </Col>
          </div>
          <Col>
            <div className="right"> Right</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
