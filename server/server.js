const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

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
        <a href="/api/categories">Orders</a>
      </li>
      <li>
        <a href="/api/orders">Categories</a>
      </li>
    </ul>`
  );
});

app.listen(port, () => {
  console.log(`Server listening on  http://localhost:${port}`);
});
