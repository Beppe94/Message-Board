import client from "../Database/pools.js";

export async function getMessagesFromDB() {
    const { rows }  = await client.query(`SELECT * FROM Messages`);
    return rows;
}

export async function insertMessageInDB(data) {
    const { user, message } = data;

    await client.query(`INSERT INTO Messages (users, message) VALUES ($1, $2)`, [user, message]);
}

