const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect("mongodb+srv://kkrishnabga_db_user:%40Krishna202006@learning-mongo.9jcyctk.mongodb.net/demo")
    console.log("Connected to DB")
}

module.exports = connectDB; 
// mongodb+srv://kkrishnabga_db_user:%40Krishna202006@learning-mongo.9jcyctk.mongodb.net server cluster se connect ho jayega itne URI mai
//mongodb+srv://kkrishnabga_db_user:%40Krishna202006@learning-mongo.9jcyctk.mongodb.net/demo a cluster ke andar databse ko connect kar degi but db to create hmne pehle nhi kiya tha but db kaahan se aaya isme hmara mongoose tool aata hai jab bhi isko demo db nhi milegi to a auto create krega beacuse it is so powerful and connect kregi usse