import {Response, Request} from "express";
import connection from "../db";

class PostController {
    async createPost(req: Request, res: Response) {
        try {

            const {title, content, userId} = req.body;
            const newPost = await connection.promise().query(
                `INSERT INTO post (title, content, user_id)
                 VALUES ("${title}", "${content}", "${userId}");`
            )
            res.json(newPost);
        } catch (e) {
            console.error(e);
            res.status(500).json({message: "Server error"});
        }
    }

    async getPost(req: Request, res: Response) {

    }
}

export default new PostController();