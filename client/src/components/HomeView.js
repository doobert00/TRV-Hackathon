import React, { useState, useEffect } from "react";
import "./View.css";
import logo from "./logo.png";

export default function HomeView() {
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
