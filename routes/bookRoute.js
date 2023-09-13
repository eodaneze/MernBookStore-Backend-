
import express from 'express';
import Book from "../models/bookModels.js";
const router = express.Router();


// adding a book
router.post('/books', async(req, res) => {
     try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
           return res.status(400).send({message: 'send all required fields: title, author, publishYear'}); 
        }

        const newBook = {
          title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };
        const book = await Book.create(newBook);
        return res.status(200).send(book);
        
     } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
     }
})

// get all books

router.get('/', async(req, res) => {
     try {
        const books = await Book.find();
        return res.status(200).json({
            count: books.length,
            data: books
        });
     } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
     }
})


// get single book

router.get('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const books = await Book.findById(id);
        return res.status(200).send(books);
     } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
     }
})
export default router;