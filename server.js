import express from 'express';
import { PORT} from './config.js';
import './config/connection.js'
import router from './routes/bookRoute.js';
const app = express();
app.use(express.json());

app.use('/api', router)
app.listen(PORT, () => {
    console.log(`server is running on localhost:${PORT}`);
})


