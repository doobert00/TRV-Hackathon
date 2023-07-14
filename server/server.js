const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db");

const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // JSON-parsing
app.use(cors()); // Cross Origin Requests
app.use(morgan("tiny")); // Server logs
app.use(express.static("../client/build"));

app
  .get("/api", (req, res) => {
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
  })
  .get("/api/products", (req, res) => {
    let search = req.query.search ? req.query.search : ".*";
    db.products.findAllProducts(search, (products) => {
      if (!products) {
        res.status(404).end();
      } else {
        res.send(products);
      }
    });
  })
  .get("/api/products/:id", (req, res) => {
    db.products.findProduct(req.params.id, (product) => {
      if (!product) {
        res.status(404).end();
      } else {
        res.send(product);
      }
    });
  })
  .get("/api/categories", (req, res) => {
    db.categories.findAllCategories((categories) => {
      if (!categories) {
        res.status(404).end();
      } else {
        res.send(categories);
      }
    });
  })
  .get("/api/categories/:id", (req, res) => {
    db.categories.findCategory(req.params.id, (category) => {
      if (!category) {
        res.status(404).end();
      } else {
        res.send(category);
      }
    });
  })
  .get("/api/orders", (req, res) => {
    db.orders.findAllOrders((orders) => {
      if (!orders) {
        res.status(404).end();
      } else {
        res.send(orders);
      }
    });
  })
  .get("/api/orders/:id", (req, res) => {
    db.orders.findOrder(req.params.id, (order) => {
      if (!order) {
        res.status(404).end();
      } else {
        res.send(order);
      }
    });
  })
  .post("/api/orders", (req, res) => {
    db.orders.addOrder(req.body, (ok) => {
      if (!ok) {
        res.status(500).end();
      } else {
        res.status(201).end();
      }
    });
  });

app.listen(port, () => {
  console.log(`Server listening on  http://localhost:${port}`);
});
