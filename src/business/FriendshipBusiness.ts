import { FriendshipDataBase } from "../data/FriendshipDataBase";
import { CustomError } from "../error/CustomError";
import { FriendshipInputDTO } from "../model/FriendshipDTO";

export class FriendshipBusiness {

    insertFriendship = async (input: FriendshipInputDTO) => {

        try {
            if (!input.makeFriendship) {
                throw new Error("Preencha todos os campos");
            }
            if (input.user === input.makeFriendship) {
                throw new Error("Amigo invalido");
            }
            const friendshipDataBase = new FriendshipDataBase()
            const friend = await friendshipDataBase.selectFriends(input)

            if (friend) {
                throw new Error("Voces ja sao amigos!");
            }
            const newFriend: FriendshipInputDTO = {
                user: input.user,
                makeFriendship: input.makeFriendship
            }
            await friendshipDataBase.InsertFriendship(newFriend)

        } catch (error: any) {
            throw new CustomError(error.message, error.message);
        }
    }

    selectFriends = async (input: FriendshipInputDTO) => {

        try {
            const friendshipDataBase = new FriendshipDataBase()
            const friend = friendshipDataBase.selectFriends(input)

            return friend

        } catch (error: any) {
            throw new CustomError(error.message, error.message);
        }
    }

    getAllFriendsPosts = async (user: string) => {

        try {
            const friendDB = new FriendshipDataBase()
            const friend = await friendDB.getAllFriendsPosts(user);

            return friend
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    deleteFriend = async (user: string, makeFriendship: string) => {
        try {
            const friendDB = new FriendshipDataBase()
            const friend = await friendDB.deleteFriendship(user, makeFriendship);

            if (!friend) {
                throw new Error("Favor preencher o amigo")
            }

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}