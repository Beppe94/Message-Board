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

    listDB.forEach((data) => {
        data.date = data.date.toISOString().split('T')[0];
    })
    
    res.render("messages", {
        messages: listDB,
        links: links,
        footerLink: footerLink
    })
}

export async function getMessageForm(req, res) {
    
    res.render("form", {
        links: links,
        errors: ''
    })
}

export async function addMessage(req, res) {
    const { user, message } = req.body;
    const date = new Date().toISOString().split('T')[0];    

    if(!user || user.trim().length == 0) {
        res.status(500).render("form", {
            links: links,
            errors: "Invalid Name"
        })
    } else if (!message  || message.trim().length == 0) {
        res.status(500).render("form", {
            links: links,
            errors: "Invalid Message"
        })
    } else {
        await insertMessageInDB({user, message, date});
        res.redirect("/");
    }
}