// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://127.0.0.1/relation_db")
//   .then(() => {
//     console.log("Connected to the database");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const userSchema = new mongoose.Schema({
//   name: String,
//   addresses: [
//     {
//       _id: false,
//       street: String,
//       city: String,
//       country: String,
//     },
//   ],
// });

// const User = mongoose.model("User", userSchema);

// const makeUser = async () => {
//   const user = new User({
//     name: "John Doe",
//   });
//   user.addresses.push({
//     street: "123 Main St",
//     city: "New York",
//     country: "USA",
//   });
//   const res = await user.save();
//   console.log(user);
// };

// makeUser();

// const addAddress = async (id) => {
//   const user = await User.findById(id);
//   user.addresses.push({
//     street: "123 Main St",
//     city: "New York",
//     country: "INA",
//   });
//   const res = await user.save();
//   console.log(res);
// };

// addAddress("66265cd0cd031df85255897e");
