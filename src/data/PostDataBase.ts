import { CustomError } from '../error/CustomError';
import { InsertPostInputDTO } from '../model/postDTO';
import { BaseDataBase } from './BaseDataBase';

export class PostDataBase extends BaseDataBase {

    private postTable = 'labook_posts';

    public createPost = async (post: InsertPostInputDTO): Promise<void> => {

        try {
            await PostDataBase.connection.insert(post).into(this.postTable)

        } catch (error: any) {
            throw new CustomError(error.message, error.message);
        }
    }


    public getPostId = async (id: string) => {
        try {
            const result = await PostDataBase
                .connection(this.postTable)
                .select("*")
                .where({ id })

            return result

        } catch (error: any) {
            throw new CustomError(error.message, error.message);
        }
    }
}