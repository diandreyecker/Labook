import { CustomError } from '../error/CustomError';
import { GetPostIdInputDTO, InsertPostInputDTO } from '../model/postDTO';
import { BaseDataBase } from './BaseDataBase';

export const postTable = 'labook_posts'

export class PostDataBase extends BaseDataBase {

    public createPost = async (post: InsertPostInputDTO): Promise<void> => {

        try {
            await PostDataBase.connection.insert(post).into(`${postTable}`)

        } catch (error: any) {
            throw new CustomError(error.message, error.message);
        }
    }

    public getPostId = async (id: GetPostIdInputDTO) => {
        try {
            const result = await PostDataBase.connection(`${postTable}`).select("*").where("id", id)
            return result

        } catch (error: any) {
            throw new CustomError(error.message, error.message);
        }
    }
}