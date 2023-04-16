import { UserDataBase } from "../data/UserDataBase";
import { InsertUserInputDTO, UserInputDTO } from "../model/userDTO";
import { IdGenerator } from "../services/idGenerator";
import { CustomError } from "../error/CustomError";
import { InvalidEmail } from "../error/UserErrors";

export class UserBusiness {

    public createUser = async (input: UserInputDTO) => {

        try {
            if (!input.name || !input.email || !input.password) {
                throw new InvalidEmail();
            }
            const id = IdGenerator.generatorId()

            const user: InsertUserInputDTO = {
                id: id,
                name: input.name,
                email: input.email,
                password: input.password
            }

            const userDataBase = new UserDataBase()
            await userDataBase.createUser(user)

        } catch (error: any) {
            throw new CustomError(error.message, error.message);
        }
    }
}
