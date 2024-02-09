const mongoose = require('mongoose');


const blogschema = new mongoose.Schema({
    
    title: { type: String, require: true, trim: true },
    body: { type: String, require: true, trim: true },
    authorId: { type: ObjectId, ref: 'Author', require: true },
    tags: [String],
    category: { type: [String], require: true },
    subcategory: [String],
    deletedAt: { type: Date, default: null },
    isDeleted: { type: Boolean, default: false },
    publishedAt: { type: Date, default: null },
    isPublished: { type: Boolean, default: false }
 
})


module.exports = mongoose.model('blog', blogschema) 