import express , {Express, Request, Response} from 'express';
import mysql, {Connection} from 'mysql2';
import {config} from 'dotenv';
import userRoutes from "./routes/user.routes";

config();
const app:Express = express();
const port: number = parseInt(process.env.PORT!, 10);

interface configData {
    host : string,
    user : string,
    password :string,
    database : string
}

const configConnect : configData ={
        host: process.env.HOST!,
        user: process.env.USER!,
        password: process.env.PASSWORD!,
        database: process.env.DATABASE!
}

const connection : Connection  = mysql.createConnection(configConnect);

app.use(express.json());
app.use('/api' , userRoutes);

app.listen(port, async () => {
    await connection.connect();
    console.log(`Server running at http://localhost:${port}`);
});