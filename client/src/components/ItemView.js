import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./ItemView.css";
import NA from "./NA.jpg";

const getItem = async (url) => {
  const res = await fetch(url, {
    method: "GET",
    mode: "cors",
  });
  return await res.json();
};

export default function ItemView() {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    getItem(`http://localhost:3000/api/products/${id}`).then((res) => {
      setItem(res);
    });
  }, []);

  return (
    <div className={"grid-container"}>
      <div className="item1">
        <img src=""></img>
      </div>

      <div className="item3">
        <h4>Name: {item.name}</h4>
        <p> Price: {item.price}</p>
        <p> Description: {item.description}</p>
        <input
          type={"button"}
          value="Add to Cart"
          //onClick={() => props.setSelectedBook(newBook)}
        />
      </div>
    </div>
  );
}

// function fetchItem(props) {
//   return;
// }
