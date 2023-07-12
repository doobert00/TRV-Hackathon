import React from "react";
import "./ItemView.css";
// import NA from "./NA.jpg"

export default function ItemView() {
  return (
    <div className={"grid-container"}>
      <div className="item1">
        <img src=""></img>
      </div>

      <div className="item2">
        <h4>Reviews</h4>
      </div>

      <div className="item3">
        <h4>Fetch Item Name</h4>
        <p>Fetch Price</p>
        <p>Fetch item description</p>
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
