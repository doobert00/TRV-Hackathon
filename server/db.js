const { MongoClient } = require("mongodb");
const dbName = "online-store";
const url = "mongodb://localhost:27017";
const collections = {
  products: "products",
  categories: "categories",
  orders: "orders",
};

async function startup() {
  let client = new MongoClient(url);
  await client.connect();
  var db = client.db(dbName);
  collections.products = db.collection(collections.products);
  collections.categories = db.collection(collections.categories);
  collections.orders = db.collection(collections.orders);
}
startup();

module.exports.products = {
  findAllProducts: (callback) => {
    collections.products
      .find({})
      .toArray()
      .then((products) => callback(products));
  },
  findProduct: (id, callback) => {
    collections.products
      .findOne({ id: parseInt(id) })
      .then((product) => callback(product));
  },
  incrementInventory: (products) => {
    products = Array.from(new Set(products));
    products = products.map((id) => {
      return collections.products.findOneAndUpdate(
        { id: parseInt(id) },
        { $inc: { inventory_count: -1 } },
        { returnNewDocument: true }
      );
    });
    Promise.all(products).then((ok, value) => {
      console.log(ok);
    });
  },
};

module.exports.categories = {
  findAllCategories: (callback) => {
    collections.categories
      .find({})
      .toArray()
      .then((categories) => {
        callback(categories);
      });
  },
  findCategory: (id, callback) => {
    collections.categories
      .findOne({ id: parseInt(id) })
      .then((category) => callback(category));
  },
};

module.exports.orders = {
  findAllOrders: (callback) => {
    collections.orders
      .find({})
      .toArray()
      .then((orders) => {
        callback(orders);
      });
  },
  findOrder: (id, callback) => {
    collections.orders
      .findOne({ id: parseInt(id) })
      .then((order) => callback(order));
  },
  addOrder: (order, callback) => {
    delete order._id;
    max_id_order = collections.orders
      .find({})
      .sort({ id: -1 })
      .limit(1)
      .toArray()
      .then((o) => {
        order.id = parseInt(o[0].id + 1); // New order has an ID one higher than the largest ID in the collection
        collections.orders.insertOne(order).then((ok) => callback(ok));
        this.products.incrementInventory(order.products);
      });
  },
};
