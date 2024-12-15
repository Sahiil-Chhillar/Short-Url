import express from 'express';
import urlRoute from './routes/urlRouter.js';
import { connectMongoDb } from './DB Connection/ConnectMongoDb.js'; 

const app = express();
const PORT = 3000;
const URL = "mongodb://localhost:27017/short-Url";

connectMongoDb(URL);

app.use(express.json());
app.use('/url', urlRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});