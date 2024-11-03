import express from 'express';
import path from 'path';
import dotenv from 'dotenv/config'

const app = express();
const assetPath = path.join('./public');
const DOTENV = process.env;

app.set('view engine', 'ejs');
app.set('views', path.join('views'));


app.use(express.urlencoded({extended:true}));
app.use(express.static(assetPath));

const messages = [
    {
        text: 'Hello there!',
        user: 'John',
        time: new Date().toDateString(),
    },
    {
        text: 'Hi!!',
        user: 'Ken',
        time: new Date().toDateString(),
    },
]

const links = [
    {
        link: '/',
        text: 'Home'
    },
    {
        link: '/new',
        text: 'New Message'
    }
]

const footerLink = [
    {
        link: 'https://github.com/Beppe94',
        text: 'Github Logo',
        src: 'githublogo.png'
    }
]

app.get('/', (req, res) => {
    res.render('messages', {messages:messages, links:links, footerLink:footerLink});
})

app.get('/new', (req, res) => {
    res.render('form');
})

app.post('/new', (req, res) => {
    const content = req.body;
    messages.push({text: content.message, user: content.user, time: new Date().toDateString()})
    res.redirect('/');
})











app.listen((DOTENV.PORT), () => {
    console.log(`App listening on port: ${DOTENV.PORT}`);
})