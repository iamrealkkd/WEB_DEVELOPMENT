const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
  },
  // Optional: Agar aap post ko user se bhi link karna chahte hain
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const postModel = mongoose.model("post", postSchema);
module.exports = postModel;
/*
post = {
    image: string,
    caption: string
}

user = {
    name: string,
    email: string,
    password: string,
    posts: [post1, post2, post3]
}
*/
