const Book = require('../models/Book');

module.exports = {
    
    list(req, res){
        Book.find({}, null,{sort: {titulo: 1}},(err, book)=>{
            if(err){
                res.status(400).send(err);
            }
            else {
                res.status(200).json(book);
            }
        });
    },

    item(req, res){
        Book.findById(req.params.id, (err, book)=>{
            if(err){
                res.status(400).send(err);
            }
            else{
                res.status(200).json(book);
            }
        });
    },

    add(req, res){
        let book = new Book(req.body);
        book.save()
            .then(book => {
                res.status(200).send('Successfully created');
            })
            .catch(err => {
                res.status(400).send(err);
            });
    },

    update(req, res){
        Book.findById(req.params.id, (err, book)=>{
            if(!book)
                res.status(404).send(err);
            else {  
                book.titulo = req.body.titulo;
                book.autor = req.body.autor;
                book.ano = req.body.ano;
                
                book.save().then(book => {
                    res.send('Successfully updated');
                })
                .catch(err => {
                    res.status(400).send(err);
                });
            }
        });
    },

    delete(req, res){
        Book.findByIdAndRemove(req.params.id, (err, book)=>{
            if(err){
                res.status(400).send(err);
            }
            else{
                res.status(200).send('Successfully removed');
            }
        });
    },

    addNotes(req, res){
        Book.findByIdAndUpdate(req.params.id,
            {$push: {notas: req.body.nota}},
            (err, note)=>{
                if(err){
                    res.status(400).send(err);
                }else{
                    res.status(200).send('Successfully added');
                }
            }
        );
    },

    avgBook(req, res){     
        Book.aggregate([
            { 
                $project: { 
                    titulo: "$titulo",
                    media: { $avg: "$notas"}
                } 
            }
        ]).exec((err, result)=>{
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).json(result);
            }
        });
    }
}