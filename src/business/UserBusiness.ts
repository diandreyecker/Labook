import { User, UserCreateInputDTO } from '../model/user';
import { UserDatabase } from './../data/UserDatabase';
import { IdGenerator } from './../services/IdGeneration';

export class UserBusiness {

    userDatabase = new UserDatabase

    public createUser = async (input: UserCreateInputDTO) => {
        try {
            if (
                !input.getName ||
                !input.getEmail ||
                !input.getPassword
            ) {
                throw new Error("Preencha todos os campos");
            }
            const id = IdGenerator.generateId()

            const user: User = new User(
                input.getEmail(),
                input.getName(),
                input.getPassword(), id)

            await this.userDatabase.createUser(user)
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public getUsers = async () => {

        try {
            const users: User[] = await this.userDatabase.getUsers()
            return (users)

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}