import { InsertPostInputDTO, PostInputDTO } from '../model/postDTO';
import { IdGenerator } from '../services/idGenerator';
import { PostDataBase } from './../data/PostDataBase';
import { CustomError } from './../error/CustomError';

export class PostBusiness {

    public createPost = async (input: PostInputDTO) => {

        try {
            if (!input.photo || !input.description || !input.type || !input.createdAt || !input.authorId) {
                throw new Error("Preencha todos os campos");
            }

            const id = IdGenerator.generatorId()

            const postInput: InsertPostInputDTO = {
                id: id,
                photo: input.photo,
                description: input.description,
                type: input.type,
                created_at: input.createdAt,
                author_id: input.authorId
            }

            const postDataBase = new PostDataBase()
            await postDataBase.createPost(postInput)

        } catch (error: any) {
            throw new CustomError(error.message, error.message);
        }
    }

    public getPostId = async (input: string) => {
        try {

            const postId = input

            if (!postId) {
                throw new Error("Preencher todos os dados");
            }

            const postDataBase = new PostDataBase()
            return await postDataBase.getPostId(input)

        } catch (error: any) {
            throw new CustomError(error.message, error.message);
        }
    }
}