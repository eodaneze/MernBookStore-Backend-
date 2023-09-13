import express from 'express';
import { PORT} from './config.js';
import './config/connection.js'
const app = express();

app.get('/', (req, res) => {
   console.log('hello from node js');
   return res.status(200).send("THIS IS A MERN BOOKSTORE APP")
})
app.listen(PORT, () => {
    console.log(`server is running on localhost:${PORT}`);
})


// qmu2xBSRtvnHQsS1