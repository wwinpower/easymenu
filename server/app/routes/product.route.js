module.exports = (app) => {
    const products = require('../controllers/product.controller.js');

    app.post('/product', products.create);

    app.get('/products/:categoryId', products.findByCategoryId);

    app.get('/product/:productId', products.findById);

    app.post('/product/:productId/delete', products.delete);
}
