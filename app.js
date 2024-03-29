import express from "express";
import dotenv from 'dotenv';

const app = express();
const env = dotenv.config().parsed;
const port = env.PORT;


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${env.URL}:${port}`);
})
