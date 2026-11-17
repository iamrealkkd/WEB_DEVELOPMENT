const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://kkrishnabga_db_user:%40Krishna202006@learning-mongo.9jcyctk.mongodb.net/project1");
    console.log("Connected to DB");
}

module.exports = connectDB;