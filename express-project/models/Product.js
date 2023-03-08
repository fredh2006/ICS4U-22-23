const mongoose = require('mongoose');
const productScheme = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description: String,
    price:{
        type: Number,
        required: true
    },
    imageUrl: String,
});

const Product = mongoose.model('Product', productScheme);

module.exports = Products;