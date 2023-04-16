import { User } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from './../error/CustomError';

export class UserDatabase extends BaseDatabase {

    private userTable = 'labook_users'

    public createUser = async (user: User) => {

        try {
            await UserDatabase.connection(this.userTable).insert(user)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

    public getUsers = async () => {

        try {

            const users: User[] = await UserDatabase.connection.select('*').from(this.userTable)
            return users;

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}