import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import "./View.css";
import logo from "./components/logo.png";

function App() {
  fetch("http://localhost:3000/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="wrapper">
      <div className="top">
        <img style={{ width: 150, height: 125 }} src={logo} />

        <input type="text" placeholder="Search..." value={searchInput} />
      </div>
      <div className="left"> Left</div>
      <div className="right"> Right</div>
      <div className="center"> Cetner</div>
    </div>
  );
}

export default App;
