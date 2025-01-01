import pkg from "pg";
import "dotenv/config";

const ENV = process.env;
const { Pool } = pkg;
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = ENV;

const SQL = `
    CREATE TABLE IF NOT EXISTS Messages(
        id uuid DEFAULT gen_random_uuid(),
        users VARCHAR (255) NOT NULL,
        message VARCHAR (500) NOT NULL,
        PRIMARY KEY (id)
    );
`;


const client = new Pool({
    connectionString: `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
})

export default client;

