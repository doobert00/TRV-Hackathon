import React from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import "./App.css";
import ItemView from "./components/ItemView";
import CategoryView from "./components/CategoryView";

function App() {
  return (
    <div>
      <ItemView />
    </div>
  );
}

export default App;
