import express from "express";
import dotenv from 'dotenv';
import morgan from 'morgan';
import router from "./routes/api.js";

const app = express();
const env = dotenv.config().parsed;
const port = env.PORT;


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.use('/', router)
app.listen(port, () => {
    console.log(`Example app listening on port ${env.URL}:${port}`);
})
