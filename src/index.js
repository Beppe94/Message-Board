import express from 'express';
import path from 'path';
import dotenv from 'dotenv/config';
import router from '../Routes/router.js';

const app = express();
const assetPath = path.join('./public');
const ENV = process.env;

app.set('view engine', 'ejs');
app.set('views', path.join('views'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(assetPath));

app.use("/", router);

app.listen((ENV.PORT), () => {
    console.log(`App listening on port: ${ENV.PORT}`);
})