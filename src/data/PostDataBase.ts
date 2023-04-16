import { Post } from '../model/post';
import { BaseDatabase } from './BaseDatabase';

export class PostDatabase extends BaseDatabase {

    private postTable = 'labook_posts'

    public createPost = async (post: Post) => {
        try {
            await PostDatabase.connection(this.postTable).insert(post)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }



    public getAllPosts = async () => {

        try {

            const allPosts: Post[] = await PostDatabase.connection.select('*').from(this.postTable)
            return allPosts;

        } catch (error: any) {
            throw new Error(error.message);
        }
    }


    // public getPostId = async (id: string) => {
    //     try {
    //         PostDatabase.connection.initialize()
    //         const allPostsId = await PostDatabase.connection.select('*').where({ id }).from(this.postTable)
    //         return allPostsId
    //     } catch (error: any) {
    //         throw new Error(error.message);
    //     } finally {
    //         console.log("conexão encerrada!");
    //         PostDatabase.connection.destroy();
    //     }
    // }
}