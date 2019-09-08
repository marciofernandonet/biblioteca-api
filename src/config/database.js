const mongoose = require('mongoose');

module.exports = mongoose
    .connect(process.env.URL_CONNECT, { useNewUrlParser: true, useFindAndModify: false })  
    .then(() => { 
        console.log('Database connected');
    }).catch(err => {
        console.error(`Error: ${err}`);
        throw err;
});