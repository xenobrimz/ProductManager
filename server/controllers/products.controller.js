const products = require('../models/products.model');

module.exports.findAllProducts = (req, res) =>{
    console.log('Calling all products!!!')
    products.find({}) 
        .then(products => res.json({results: products}))
        .catch(err => res.json({message: 'uh-oh something went wrong', error: err})) 
}


module.exports.findOneProduct = (req, res) =>{
    console.log('Calling product!!!')
    products.find({_id: req.params._id}) 
        .then(product => res.json({results: product}))
        .catch(err => res.json({message: 'uh-oh something went wrong', error: err})) 
}

module.exports.createProduct = (req, res) =>{
    console.log('Creating product!!!')
    products.create(req.body) 
        .then(newproduct => res.json({result: newproduct}))
        .catch(err => res.json({message: 'uh-oh something went wrong', error: err}))
}

module.exports.updateProduct = (req, res) =>{
    console.log('Updating product!!!')
    products.findOneAndUpdate(
        {_id: req.params._id}, 
        req.body, 
        {new: true, runValidators: true}
    )
       .then(updatedProduct => res.json({result: updatedProduct}))
       .catch(err => res.json({message: 'uh-oh something went wrong', error: err})) 
}
    

module.exports.deleteProduct = (req, res) =>{
    console.log('Deleting product!!!')
    products.deleteOne({ _id: req.params._id }) 
        .then( result => res.json({ result: result }) )
        .catch( err => res.json({message: 'uh-oh something went wrong', error: err}) ) 
}