const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");
const db = require("./db");

const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // JSON-parsing
app.use(cors()); // Cross Origin Requests
app.use(morgan("tiny")); // Server logs

app.get("/", (req, res) => {
  res.send(
    `    
    <ul>
      <li>
        <a href="/api/products">Products</a>
      </li>
      <li>
        <a href="/api/orders">Orders</a>
      </li>
      <li>
        <a href="/api/categories">Categories</a>
      </li>
    </ul>`
  );
});

app.route("/api/products").get((req, res) => {
  // fs.readFile("../dataset/products.json", (err, json) => {
  //   let obj = JSON.parse(json);
  //   res.json(obj);
  // });
  db.findAllProducts((products) => {
    if (!products) {
      res.status(404).end();
    } else {
      res.send(products);
    }
  });
});

app.route("/api/categories").get((req, res) => {
  fs.readFile("../dataset/categories.json", (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.route("/api/orders").get((req, res) => {
  fs.readFile("../dataset/orders.json", (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.listen(port, () => {
  console.log(`Server listening on  http://localhost:${port}`);
});
