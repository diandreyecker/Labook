import { GetPostIdInputDTO, InsertPostInputDTO, PostInputDTO } from '../model/postDTO';
import { IdGenerator } from '../services/idGenerator';
import { PostDataBase } from './../data/PostDataBase';
import { CustomError } from './../error/CustomError';

export class PostBusiness {

    public createPost = async (input: PostInputDTO) => {
        try {
            const { photo, description, type, createdAt, authorId } = input

            if (!photo || !description || !type || !createdAt || !authorId) {
                throw new Error("Preencha todos os campos");
            }

            const id = IdGenerator.generatorId()

            const postInput: InsertPostInputDTO = {
                id: id,
                photo: photo,
                description: description,
                type: type,
                created_at: createdAt,
                author_id: authorId
            }

            const postDataBase = new PostDataBase()
            await postDataBase.createPost(postInput)

        } catch (error: any) {
            throw new CustomError(error.message, error.message);
        }
    }

    public getPostId = async (input: GetPostIdInputDTO) => {
        try {

            const id = input

            if (!id) {
                throw new Error("Preencher todos os dados");
            }

            const postDataBase = new PostDataBase()
            return await postDataBase.getPostId(input)

        } catch (error: any) {
            throw new CustomError(error.message, error.message);
        }
    }
}