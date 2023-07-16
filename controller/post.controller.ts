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
        try {
            const id = req.query.id;
            const posts = await connection.promise().query(
                `SELECT *
                 FROM post
                 WHERE user_id = "${id}";`
            )
            res.json(posts[0]);
        } catch (e) {
            console.error(e);
            res.status(500).json({message: "Server error"});
        }
    }
}

export default new PostController();