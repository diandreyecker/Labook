import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness";
import { userInputDTO } from "../model/userDTO";

export class UserController {

    public createUser = async (req: Request, res: Response): Promise<void> => {

        try {
            const input: userInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input)

            res.status(201).send("Usuário Criado com Sucesso!")

        } catch (error: any) {
            res.status(error.message || 400).send(error.message || error.sqlMessage)
        }
    }
}
