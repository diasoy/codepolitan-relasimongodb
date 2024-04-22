const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/relation_db")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  username: String,
  age: Number,
});

const tweetSchema = new mongoose.Schema({
  text: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

const makeTweet = async () => {
  const user = await User.findOne({
    username: "John Doe",
  });
  const tweet = new Tweet({
    text: "Hello, this is my second tweet",
    likes: 0,
  });
  tweet.user = user;
  tweet.save();
};

// makeTweet();

const showTweets = async () => {
  const tweet = await Tweet.findById("66266cf73a20f1ad3b4a7e10").populate("user");
  console.log(tweet);
};

// showTweets();
