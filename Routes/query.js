import client from "../Database/pools.js";

export async function getMessagesFromDB() {
    const { rows }  = await client.query(`SELECT * FROM Messages`);
    return rows;
}

export async function insertMessageInDB(data) {
    const { user, message, date } = data;

    await client.query(`INSERT INTO Messages (username, message, date) VALUES ($1, $2, $3)`, [user, message, date]);
}

