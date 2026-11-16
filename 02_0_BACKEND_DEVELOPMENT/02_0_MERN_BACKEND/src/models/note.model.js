const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: String,
    description: String
})


const noteModel = mongoose.model("note", noteSchema)
/*
CRUD Operations
Create - POST
Read - GET
Update - PATCH
Delete - DELETE 
inhe karne ke liye model bnana pdta hai nhi to bahut code likkhna pdega noteModel ke bina bhi hoga but gadha majduri
*/

module.exports = noteModel