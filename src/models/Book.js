const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    autor:{
        type: String,
        required: true
    },
    ano:{
        type: String,
        required: true
    },
    notas:[{
        type: Number,
        required: true
    }]
});

module.exports = mongoose.model('Book', BookSchema);