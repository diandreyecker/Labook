import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness"
import { Post, PostCreateInputDTO } from "../model/post";

export class PostController {

    postBusiness = new PostBusiness()

    public createPost = async (req: Request, res: Response) => {
        try {

            const { photo, description, type, createAd, authorId } = req.body
            const input = new PostCreateInputDTO(photo, description, type, createAd, authorId)

            await this.postBusiness.createPost(input)

            res.status(201).send({ message: "Post Criado!" })
        } catch (error: any) {
            res.status(400).send(error.message || 400).send(error.message || error.sqlMessage)
        }
    }


    public getAllPosts = async (req: Request, res: Response) => {

        try {
            const posts: Post[] = await this.postBusiness.getAllPosts()
            res.status(201).send(posts)

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }


    // public getPostsId = async (req: Request, res: Response) => {

    //     try {

    //         const id = req.params.id

    //         const postsId = await this.postBusiness.getPostId(id)

    //         res.status(201).send(postsId)

    //     } catch (error: any) {
    //         res.status(400).send(error.message || 400).send(error.message || error.sqlMessage)
    //     }
    // }
}