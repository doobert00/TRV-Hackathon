import React, { useState, useEffect } from "react";
import "./HomeView.css";
import NA from "./NA.jpg";

export default function HomeView() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="grid-container">
      <div className="item1">
        <img style={{ width: 150, height: 125 }} src={NA} />
        Games
      </div>
      <div className="item2">
        <img style={{ width: 150, height: 125 }} src={NA} />
        Games
      </div>
      <div className="item3">
        <img style={{ width: 150, height: 125 }} src={NA} />
        Games
      </div>
      <div className="item4">
        <img style={{ width: 150, height: 125 }} src={NA} />
        Games
      </div>
      <div className="item5">
        <img style={{ width: 150, height: 125 }} src={NA} />
        Games
      </div>
      <div className="item6">
        <img style={{ width: 150, height: 125 }} src={NA} />
        Games
      </div>
      <div className="item7">
        <img style={{ width: 150, height: 125 }} src={NA} />
        Games
      </div>
      <div className="item8">
        <img style={{ width: 150, height: 125 }} src={NA} />
        Games
      </div>
      <div className="item9">
        <img style={{ width: 150, height: 125 }} src={NA} />
        Games
      </div>
    </div>
  );
}
