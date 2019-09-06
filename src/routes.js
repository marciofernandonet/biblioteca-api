const express = require('express');
const routes = express.Router();

const LivroController = require('./controllers/BookController');

routes.get('/livros', LivroController.list);
routes.get('/livros/:id', LivroController.item);
routes.post('/livros', LivroController.add);
routes.put('/livros/:id', LivroController.update);
routes.delete('/livros/:id', LivroController.delete);
routes.post('/notas/:id', LivroController.addNotes);
routes.get('/media', LivroController.avgBook);

module.exports = routes;