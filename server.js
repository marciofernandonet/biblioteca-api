require('dotenv').config({
    path: process.env.NODE_ENV === 'development' ? '.env.dev' : null
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

require('./src/config/database');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', require('./src/routes'));

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});