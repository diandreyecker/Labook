import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/userDTO";

export class UserController {

    public createUser = async (req: Request, res: Response): Promise<void> => {

        try {
            const input: UserInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input)

            res.status(201).send("Usuário Criado com Sucesso!")

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}
