import express, { Router } from 'express';
const router: Router = express.Router();
import userController from "../controller/user.controller";

router.post('/user' , userController.createUser);
router.get('/user' , userController.getUser);
router.get('/user/:id' , userController.getOneUser);
router.put('/user' , userController.updateUser);
router.delete('/user/:id' , userController.deleteUser);


export default router;