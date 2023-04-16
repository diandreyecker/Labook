import { FriendshipInputDTO } from "../model/FriendshipDTO";
import { BaseDataBase } from "./BaseDataBase";

export class FriendshipDataBase extends BaseDataBase {

    private friendshipTable = "labook_friendship"

    InsertFriendship = async (friend: FriendshipInputDTO) => {

        try {
            await BaseDataBase
                .connection(this.friendshipTable)
                .insert([
                    { user: friend.makeFriendship, make_friendship: friend.user },
                    { user: friend.user, make_friendship: friend.makeFriendship }
                ])
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    selectFriends = async (friend: FriendshipInputDTO) => {

        try {
            const friendUser = await BaseDataBase
                .connection(this.friendshipTable)
                .select("*")
                .where({ user: friend.user, make_friendship: friend.makeFriendship })

            return friendUser[0]


        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    getAllFriendsPosts = async (user: string) => {

        try {
            const friendsUser = await BaseDataBase
                .connection(this.friendshipTable)
                .select("labook_friendship.make_friendship", "labook_users.name as Usuário",
                    "labook_posts.photo", "labook_posts.description", "labook_posts.created_at", "labook_posts.type")
                .where({ user })
                .innerJoin("labook_users", "labook_friendship.make_friendship", "labook_users.id")
                .innerJoin("labook_posts", "labook_friendship.make_friendship", "labook_posts.author_id")

            return friendsUser

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    deleteFriendship = async (user: string, makeFriendship: string) => {

        try {
            const deleteF = await BaseDataBase
                .connection(this.friendshipTable)
                .delete()
                .where({ user: makeFriendship, make_friendship: user })
                .orWhere({ user: user, make_friendship: makeFriendship })

            return deleteF

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}