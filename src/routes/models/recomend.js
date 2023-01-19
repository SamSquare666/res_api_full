const mongoose = require ("mongoose");
const recomendSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    }

});

module.exports = mongoose.model('recomend',recomendSchema);