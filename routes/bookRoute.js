
import express from 'express';
import Book from "../models/bookModels.js";
import { addBook, deleteBook, getBook, getBooks, updateBook } from '../controller/bookController.js';
const router = express.Router();


// adding a book
router.post('/books', addBook)
// get all books
router.get('/', getBooks)
// get single book
router.get('/:id', getBook)
// updating a book
router.put('/:id', updateBook)
// deleting a book
router.delete('/:id', deleteBook)

export default router;