import React from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import "./App.css";
import HomeView from "./components/HomeView";

function App() {
  fetch("http://localhost:3000/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });

  return (
    /*<div className="App">
      <header className="App-header">
        <HomeView />
      </header>
    </div>*/
    <HomeView />
  );
}

export default App;
