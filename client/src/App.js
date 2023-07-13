import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import ItemView from "./components/ItemView";
import CategoryView from "./components/CategoryView";
import HomeView from "./components/HomeView.js";

import logo from "./components/logo.png";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [categories, setCategories] = useState([]);

  /*
  useEffect(() => {
    fetchCategories().then((cats) => {
      setCategories(cats);
    });
  }, []);
  */

  return (
    <div className="wrapper">
      <div className="top">
        <img style={{ width: 150, height: 125 }} src={logo} />

        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => setSearchInput(event.target.value)}
          value={searchInput}
        />
      </div>
      <div className="left"></div>
      <div className="right"> Right</div>
      <div className="center">
        <Routes>
          <Route exact path="/" element={<HomeView />} />
          <Route path="/item" element={<ItemView />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
