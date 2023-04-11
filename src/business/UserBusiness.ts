import { UserDataBase } from "../data/UserDataBase";
import { InsertUserInputDTO, userInputDTO } from "../model/userDTO";
import { IdGenerator } from "../services/idGenerator";
import { user } from '../model/user'
import { CustomError } from "../error/CustomError";

export class UserBusiness {

    public createUser = async (input: userInputDTO) => {
        try {
            const { name, email, password } = input

            if (!name || !email || !password) {
                throw new Error("Preencha todos os campos");
            }

            const id = IdGenerator.generatorId()

            const userInput: InsertUserInputDTO = {
                id,
                name,
                email,
                password
            }

            const userDataBase = new UserDataBase()
            
            await userDataBase.createUser(userInput)

        } catch (error: any) {
            throw new CustomError(error.message, error.message);
        }
    }
}
