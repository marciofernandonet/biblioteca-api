const mongoose = require('mongoose');

module.exports = mongoose
    //.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, { useNewUrlParser:true, useFindAndModify: false })
    
    .connect('mongodb+srv://userb:userb123@clustermongo-l9enx.mongodb.net/biblioteca', { useNewUrlParser: true, useFindAndModify: false })
    
    .then(() => { 
        console.log('Database Connected');
    }).catch(err => {
        console.error(`Error: ${err}`);
        throw err;
    });