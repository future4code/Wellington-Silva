import express from 'express';
import {Request, Response} from 'express';
import dontenv from 'dotenv';
import { IdGenerator } from './idGenerate';
import * as jwt from 'jsonwebtoken';
import { UserDatabase } from './UserDatabase';
import { Authenticator } from './Authenticator';




dontenv.config();

const app = express();
app.use(express.json());

app.post("/signup", async (req: Request, res: Response) => {
    try{
        const userData = {
            name:  req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();


        const userDatabase = new UserDatabase();
        await userDatabase.createUser(id, userData.name, userData.email, userData.password);

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({id});

        res.status(200).send({token});

    }
    catch(err){
        res.status(400).send(err.message)
    }
})

app.post("/login", async(req:Request, res: Response) =>{
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        const userDatabase = new UserDatabase();
        const user = await userDatabase.getUserByEmail(userData.email);

        if(user.password !== userData.password){
            throw new Error("invalid Password")
        }

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({id: user.id})

        res.status(200).send({token})
    } catch (error) {
        res.status(400).send(error.message)
    }
})

const server = app.listen(3000, () => {
    if(server){
        console.log(`servidor rodando na porta 3000`)
    }else {
        console.log("Fala no servidor")
    }
})