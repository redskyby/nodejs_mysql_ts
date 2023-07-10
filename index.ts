import express , {Express, Request, Response} from 'express';
import mysql, {Connection} from 'mysql2';

const app:Express = express();
const port: number = 3000;

interface configData {
    host : string,
    user : string,
    password :string,
    database : string
}

const configConnect : configData ={
        host: 'localhost',
        user: 'root',
        password: 'Docenko4493!',
        database: 'userdb1'
}

const connection : Connection  = mysql.createConnection(configConnect);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Pasha ,TypeScript and Node.js!');
});

app.listen(port, async () => {
    await connection.connect();
    console.log(`Server running at http://localhost:${port}`);
});