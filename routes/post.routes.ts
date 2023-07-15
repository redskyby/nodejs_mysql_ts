import express, {Router} from 'express';
const router: Router = express.Router();
import postController from "../controller/post.controller";

router.post('/post', postController.createPost);
router.get('/post', postController.getPost);


export default router;