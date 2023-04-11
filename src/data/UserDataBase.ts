import { BaseDataBase } from './BaseDataBase';
import { CustomError } from './../error/CustomError';
import { InsertUserInputDTO } from '../model/userDTO';

export const userTable = 'labook_users'

export class UserDataBase extends BaseDataBase {

    public createUser = async (user: InsertUserInputDTO): Promise<void> => {

        try {
            await UserDataBase.connection.insert(user).into(`${userTable}`)

        } catch (error: any) {
            throw new CustomError(error.message, error.message);
        }
    }
}