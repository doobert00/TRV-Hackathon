import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  fetch("http://localhost:3000/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
