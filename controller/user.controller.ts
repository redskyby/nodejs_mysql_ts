import {Response, Request} from "express";
import connection from "../db";

class UserController {
    async createUser(req: Request, res: Response) {
        try {
            const {name, surname} = req.body;
            const newPerson = await connection.promise().query(
                `INSERT INTO person (name, surname)
                 VALUES ("${name}", "${surname}")`
            )

            res.json(newPerson);
        } catch (e) {
            console.error(e);
            res.status(500).json({message: "Server error"});
        }

    }

    async getUser(req: Request, res: Response) {
        try {
            const result = await connection.promise().query(
                'SELECT * FROM person;'
            );

            res.json(result[0]);
        } catch (e) {
            console.error(e);
            res.status(500).json({message: "Server error"});
        }
    }

    async getOneUser(req: Request, res: Response) {
        try {
            const id: string = req.params.id;
            const result = await connection.promise().query(
                `SELECT *
                 FROM person
                 WHERE id = "${id}";`
            );

            res.json(result[0]);
        } catch (e) {
            console.error(e);
            res.status(500).json({message: "Server error"});
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const {id, name, surname} = req.body;
            const user = await connection.promise().query(
                `UPDATE person
                 SET name    = "${name}",
                     surname = "${surname}"
                 WHERE id = "${id}";`
            )

            const result = await connection.promise().query(
                `SELECT *
                 FROM person
                 WHERE id = "${id}";`
            );

            res.json(result[0]);
        } catch (e) {
            console.error(e);
            res.status(500).json({message: "Server error"});
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const id: string = req.params.id;
            const result = await connection.promise().query(
                `DELETE
                 FROM person
                 WHERE id = "${id}";`
            );

            res.json(result);
        } catch (e) {
            console.error(e);
            res.status(500).json({message: "Server error"});
        }
    }
}


export default new UserController();