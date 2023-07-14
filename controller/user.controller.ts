import {Response, Request} from "express";
import connection from "../db";

class UserController {
    async createUser(req: Request, res: Response) {
        const {name, surname} = req.body;
        const newPerson = await connection.execute(
            `INSERT INTO person (name, surname) VALUES (?, ?);`,
            [name , surname]
        )

        res.json(newPerson);
    }

    async getUser(req: Request, res: Response) {

    }

    async getOneUser(req: Request, res: Response) {

    }

    async updateUser(req: Request, res: Response) {

    }

    async deleteUser(req: Request, res: Response) {

    }
}


export default new UserController();