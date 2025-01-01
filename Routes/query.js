import client from "../Database/pools.js";

export async function getMessagesFromDB() {
    const { row } = await client.query(`SELECT * FROM Messages`);
    return row;
}

export async function insertMessageInDB(data) {
    const { name, message } = data;
    const time = new Date().toDateString();
    
    await client.query(`INSERT INTO Messages (users, message) VALUES (1$, 2$, 3$)`, [name, message, time]);
}

