import { getMessagesFromDB, insertMessageInDB } from "../Routes/query.js";

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

export async function getList(req, res) {
    const listDB = await getMessagesFromDB();
    console.log(listDB);
    
    res.render("messages", {
        messages: listDB,
        links: links,
        footerLink: footerLink
    })
}

export async function newMessage(req, res) {
    const { data } = req.body;
    console.log(data);
    
    res.render("form", {
        links: links
    })
}