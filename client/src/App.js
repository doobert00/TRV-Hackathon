import React, { useState, useEffect, useCallback } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-grid";
import "./App.css";

import ItemView from "./components/ItemView";
import CategoryView from "./components/CategoryView";
import HomeView from "./components/HomeView.js";
import CategoryPane from "./components/CategoryPane";

import logo from "./components/logo.png";
import cart from "./components/cart.jpg";

function App() {
  const nav = useNavigate();
  const handleLogoClick = useCallback(() => nav("/", { replace: true }), [nav]);
  const handleCartClick = useCallback(
    () => nav("/cart", { replace: true }),
    [nav]
  );

  const [searchInput, setSearchInput] = useState("");

  return (
    <div style={{ backgroundColor: "#e9e9e9" }}>
      <Container>
        <div className="top">
          <Row>
            <Col>
              <img
                style={{ width: 125, height: 110 }}
                src={logo}
                onClick={handleLogoClick}
              />
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
                <Route path="/category/:id" element={<CategoryView />} />
                <Route exact path="/cart" element={<HomeView />} />
              </Routes>
            </Col>
          </div>
          <div className="right">
            <Col>
              <img
                style={{ width: 70, heigh: 125 }}
                src={cart}
                onClick={handleCartClick}
              />
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
