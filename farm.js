const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/relation_db")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  farm: {
    type: String,
    enum: ["spring", "summer", "autumn", "winter"],
  },
});

const farmSchema = new mongoose.Schema({
  name: String,
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);
// Product.insertMany([
//   { name: "Grape", price: 10, farm: "spring" },
//   { name: "Apple", price: 5, farm: "summer" },
//   { name: "Orange", price: 7, farm: "autumn" },
//   { name: "Pear", price: 8, farm: "winter" },
// ]).then((res) => {
//   console.log(res);
// });

// const makeFarm = async () => {
//   const farm = new Farm({
//     name: "Grape",
//     city: "New York",
//   });
//   const melon = await Product.findOne({ name: "Grape" });
//     farm.products.push(melon);
//     const res = await farm.save();
//     console.log(res);
// };

// makeFarm();

// const addProduct = async (id) => {
//   const farm = await Farm.findById(id);
//   const apple = await Product.findOne({ name: "Apple" });
//   farm.products.push(apple);
//   const res = await farm.save();
//   console.log(res);
// };

// addProduct("6626685280dc442f23670d16");

Farm.findOne({ name: "Grape" })
    .populate("products")
    .then((farm) => {
        console.log(farm);
  });
