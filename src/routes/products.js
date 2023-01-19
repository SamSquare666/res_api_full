const express = require ('express');
const productsSchema = require("../routes/models/products");

const router = express.Router();


//crar producto
router.post('/products', (req,res) => {
    const products = productsSchema(req.body);
    products
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }));
});

// obtener todos los productos
router.get('/products', (req,res) => {
    productsSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }));
});

// Encontrar un producto
router.get('/productos/:id', (req,res) => {
    const {id} = req.params;
    productsSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }));
});

//actualizar un producto
router.put('/products/:id', (req,res) => {
    const {id} = req.params;
    const {name, description, price} = req.body;
    productsSchema
    .updateOne({ _id: id}, {$set: {name, description, price}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }));
});

//borrar un producto
router.delete('/products/:id', (req,res) => {
    const {id} = req.params;
    productsSchema
    .remove({ _id: id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }));
});

module.exports = router;