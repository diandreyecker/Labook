
import { Post, PostCreateInputDTO } from '../model/post';
import { IdGenerator } from '../services/IdGeneration';
import { PostDatabase } from './../data/PostDatabase';

export class PostBusiness {
   postDatabase = new PostDatabase

   public createPost = async (input: PostCreateInputDTO) => {

      try {
         if (
            !input.photo ||
            !input.description ||
            !input.type ||
            !input.authorId
         ) {
            throw new Error("Preencha todos os campos!");
         }

         const id = IdGenerator.generateId()

         const post: Post = new Post(id, input.photo, input.description, input.type, input.createdAt, input.authorId)

         await this.postDatabase.createPost(post)
      } catch (error: any) {
         throw new Error(error.message)
      }
   }



   public getAllPosts = async () => {

      try {
         const posts: Post[] = await this.postDatabase.getAllPosts()
         return (posts)

      } catch (error: any) {
         throw new Error(error.message);
      }
   }



   //business
   // public getPostId = async (id: string) => {

   //    try {
   //       return await this.postDatabase.getPostId(id)
   //    } catch (error: any) {
   //       throw new Error(error.message);
   //    }
   // }
}

   //    getPostsId = async (req: Request, res: Response) => {

   //       try {

   //           const id = req.params.id

   //           const queryResult = await this.postBusiness("labook_posts").select("*").where({ id })

   //           if (!queryResult[0]) {
   //               res.statusCode = 404
   //               message = "Post not found"
   //               throw new Error(message)
   //           }

   //           const post: post = {
   //               id: queryResult[0].id,
   //               photo: queryResult[0].photo,
   //               description: queryResult[0].description,
   //               type: queryResult[0].type,
   //               createdAt: queryResult[0].created_at,
   //               authorId: queryResult[0].author_id,
   //           }

   //           res.status(200).send({ message, post })

   //       } catch (error: any) {
   //           let message = error.sqlMessage || error.message
   //           res.statusCode = 400
   //           res.send({ message })
   //       }
   //   }
