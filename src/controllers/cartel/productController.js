import * as productModel from '../../models/mongoModels/cartel/productModel.js';

module.exports = (app) => {
    app.get('/cartel/products/sku/:sku', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        let value = req.params.sku,
            param = 'sku';
        productModel.getProductsByParam(param, value, function(err, docs) {
            if (err) {
                res.status(500).send();
            } else {
                res.status(200).send(docs);
            }
        });
    });

    app.get('/cartel/products/', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        productModel.getAllProducts(function(err, docs) {
            if (err) {
                res.status(500).send();
            } else {
                res.status(200).send(docs);
            }
        });
    });
}