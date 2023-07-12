import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import "./App.css";
import logo from "./components/logo.png";

const categoryLink =
  "https://5190-2603-7080-2001-3b05-285b-82f8-6e37-c08d.ngrok-free.app/api/categories";

async function fetchCategories() {
  const res = await fetch(categoryLink);
  return await res.json();
}

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((cats) => {
      setCategories(cats);
    });
  }, []);

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
      <div className="left">
        <ul>
          {categories.map((cat, index) => {
            return <li key={index}>{cat}</li>;
          })}
        </ul>
      </div>
      <div className="right"> Right</div>
      <div className="center"> Cetner</div>
    </div>
  );
}

export default App;
