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
  db.findAllProducts((products) => {
    if (!products) {
      res.status(404).end();
    } else {
      res.send(products);
    }
  });
});

app.route("/api/categories").get((req, res) => {
  db.findAllCategories((categories) => {
    if (!categories) {
      res.status(404).end();
    } else {
      res.send(categories);
    }
  });
});

app.route("/api/orders").get((req, res) => {
  db.findAllOrders((orders) => {
    if (!orders) {
      res.status(404).end();
    } else {
      res.send(orders);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on  http://localhost:${port}`);
});
