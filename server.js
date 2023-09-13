import express from 'express';
import { PORT} from './config.js';
import './config/connection.js'
import router from './routes/bookRoute.js';
import cors from 'cors';
const app = express();
// middleware for passing request body
app.use(express.json());
// middleware for handling CORS POLICY
// option one: allow all origin with default cors(*)
// app.use(cors());
// option2: allow custome origins

app.use(
    cors({
        origin: 'http://localhost:3000',
        method: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
)

app.use('/api', router)
app.listen(PORT, () => {
    console.log(`server is running on localhost:${PORT}`);
})


