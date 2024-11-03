import express from 'express';
import path from 'path';

const DOTENV = process.env;
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join('views'));
const message = [
    {
        text: 'Hello there!',
        user: 'John',
        time: new Date()
    },
    {
        text: 'Hi!!',
        user: 'Ken',
        time: new Date()
    },
]

