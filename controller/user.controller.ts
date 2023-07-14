import {Response , Request} from "express";

class UserController {
    async createUser(req : Request, res : Response){
        const {name  , surname} = req.body;
        console.log(name , surname);
        res.json('ok');
    }
    async getUser(req : Request, res : Response){

    }
    async getOneUser(req : Request, res : Response){

    }
    async updateUser(req : Request, res : Response){

    }
    async deleteUser(req : Request, res : Response){

    }
}


export  default new UserController();