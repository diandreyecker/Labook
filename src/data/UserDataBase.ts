import { BaseDataBase } from './BaseDataBase';
import { CustomError } from './../error/CustomError';
import { InsertUserInputDTO } from '../model/userDTO';

export class UserDataBase extends BaseDataBase {

    private userTable = 'labook_users'

    public createUser = async (user: InsertUserInputDTO): Promise<void> => {

        try {
            await UserDataBase.connection.insert(user).into(this.userTable)

        } catch (error: any) {
            throw new CustomError(error.message, error.message);
        }
    }
}