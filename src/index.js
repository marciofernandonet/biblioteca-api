require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;

const app = express();

require('./config/database');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});