
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    fname: { type: String, require: true, trim: true },
    lname: { type: String, require: true, trim: true },
    title: { type: String, enum: ["Mr", "Mrs", "Miss"], require: true },
    email: { type: String, lowercase: true, require: true, unique: true, trim: true },
    password: { type: String, require: true, minimum: 8, trim: true }
}, { timestamps: true });


module.exports = mongoose.model('author', authorSchema) 


//users
//Author APIs /authors
// Create an author - atleast 5 authors