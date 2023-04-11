import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { GetPostIdInputDTO, PostInputDTO } from "../model/postDTO";
import { CustomError } from "../error/CustomError";

export class PostController {

    public createPost = async (req: Request, res: Response): Promise<void> => {

        try {
            const input: PostInputDTO = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                createdAt: req.body.createdAt,
                authorId: req.body.authorId
            }

            const postBusiness = new PostBusiness()
            await postBusiness.createPost(input)

            res.status(201).send("Post Criado!")

        } catch (error: any) {
            res.status(error.message || 400).send(error.message || error.sqlMessage)
        }
    }

    public getPostId = async (req: Request, res: Response) => {
        try {

            const postId: GetPostIdInputDTO = { postId: req.params.postId }

            const postBusiness = new PostBusiness()
            const posts = await postBusiness.getPostId(postId)

            res.status(200).send(posts)

        } catch (error: any) {
            throw new CustomError(error.message, error.message);
        }
    }
}