const ProductsController = require('../controllers/products.controller')


module.exports = app => { 
    app.get('/api/products', ProductsController.findAllProducts)
    app.get('/api/products/:_id/', ProductsController.findOneProduct)
    app.post('/api/products/create/', ProductsController.createProduct) 
    app.patch('/api/products/:_id/update/', ProductsController.updateProduct)
    app.delete('/api/products/:_id/delete/', ProductsController.deleteProduct)
}