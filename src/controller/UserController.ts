import { Request, Response } from "express";
import { User, UserCreateInputDTO } from "../model/user";
import { UserBusiness } from './../business/UserBusiness';

export class UserController {
    userBusiness = new UserBusiness()

    public createUser = async (req: Request, res: Response) => {
        try {

            const { name, email, password } = req.body
            const input = new UserCreateInputDTO(name, email, password)
            await this.userBusiness.createUser(input)

            res.status(201).send({ message: "Usuário Criado!" })
        } catch (error: any) {
            res.status(400).send(error.message || 400).send(error.message || error.sqlMessage)
        }
    }

    public getUsers = async (req: Request, res: Response) => {

        try {
            const users: User[] = await this.userBusiness.getUsers()
            res.status(201).send(users)

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}