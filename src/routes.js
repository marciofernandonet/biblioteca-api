const express = require('express');
const routes = express.Router();

const BookController = require('./controllers/BookController');

routes.get('/livros', BookController.list);
routes.get('/livros/:id', BookController.item);
routes.post('/livros', BookController.add);
routes.put('/livros/:id', BookController.update);
routes.delete('/livros/:id', BookController.delete);
routes.post('/notas/:id', BookController.addNotes);
routes.get('/media', BookController.avgBook);

module.exports = routes;