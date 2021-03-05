const { Double } = require('mongodb');
let mongoose = require('mongoose');

// create a model class

/**
 * add your code to 
 * create your model here
 * 
 */
let bookModel = mongoose.Schema({
    name :String,
    author :String,
    published :Number,
    description :String,
    price :Number
},
{
    collection : "Books"
})


module.exports = mongoose.model('Book', bookModel);