const { MongoClient } = require("mongodb");
const dbName = "online-store";
const url = "mongodb://localhost:27017";
const collections = {
  products: "products",
  categories: "categories",
  orders: "orders",
};

const client = new MongoClient(url);

async function startup() {
  let client = new MongoClient(url);
  await client.connect();
  var db = client.db(dbName);
  collections.products = db.collection(collections.products);
  collections.categories = db.collection(collections.categories);
  collections.orders = db.collection(collections.orders);
}
startup();

module.exports.findAllProducts = (callback) => {
  let dataPromise = collections.products.find({}).toArray();
  dataPromise.then((products) => callback(products));
};
