const mongoose = require('mongoose')


const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true,"title is needed"],
        minlength:[3,"setup needs to be at least 10 characters long"]
    },  
    price: {
        type: Number,
        required:[true,"price is needed"],
    },
    description: {type: String, 
        required: [true,'product requires description']}
})

const Products = mongoose.model('Products', ProductsSchema);

module.exports = Products