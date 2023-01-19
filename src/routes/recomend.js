const express = require ('express');
const recomendSchema = require("../routes/models/recomend");

const router = express.Router();


//crar recomendacion
router.post('/recomend', (req,res) => {
    const recomend = recomendSchema(req.body);
    recomend
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }));
});

// obtener todas las recomendaciones
router.get('/recomend', (req,res) => {
    recomendSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }));
});

// Encontrar una recomendacion
router.get('/recomend/:id', (req,res) => {
    const {id} = req.params;
    recomendSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }));
});

//actualizar una recomendacion 
router.put('/recomend/:id', (req,res) => {
    const {id} = req.params;
    const {name, description, fecha} = req.body;
    recomendSchema
    .updateOne({ _id: id}, {$set: {name, description, fecha}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }));
});

//borrar una recomendacion 
router.delete('/recomend/:id', (req,res) => {
    const {id} = req.params;
    recomendSchema
    .remove({ _id: id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }));
});



module.exports = router;