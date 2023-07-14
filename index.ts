import express , {Express} from 'express';
import {config} from 'dotenv';
import userRoutes from "./routes/user.routes";
import connection from "./db";

config();
const app:Express = express();
const port: number = parseInt(process.env.PORT!, 10);



app.use(express.json());
app.use('/api' , userRoutes);

app.listen(port, async () => {
    await connection.connect();
    console.log(`Server running at http://localhost:${port}`);
});