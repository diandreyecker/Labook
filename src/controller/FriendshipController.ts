import { Request, Response } from "express"
import { FriendshipInputDTO } from "../model/FriendshipDTO"
import { FriendshipBusiness } from "../business/FriendshipBusiness"

export class FriendshipController {

    insertFriend = async (req: Request, res: Response) => {

        try {
            const input: FriendshipInputDTO = {
                user: req.body.user,
                makeFriendship: req.body.makeFriendship
            }
            const friendshipBusiness = new FriendshipBusiness()
            await friendshipBusiness.insertFriendship(input)

            res.status(201).send("Amizade aceita com sucesso!")

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    selectFriends = async (req: Request, res: Response) => {

        try {
            const input: FriendshipInputDTO = {
                user: req.body.user,
                makeFriendship: req.body.makeFriendship
            }

            const friendshipBusiness = new FriendshipBusiness()
            await friendshipBusiness.selectFriends(input)

            res.status(200).send("Vocês são amigos agora!")

        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }

    getAllFriendsPosts = async (req: Request, res: Response) => {

        try {
            const { user } = req.params

            const friendBusiness = new FriendshipBusiness()
            const getPosts = await friendBusiness.getAllFriendsPosts(user);

            res.status(201).send({ message: "Postagens selecionadas com sucesso!", getPosts });
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    deleteFriendships = async (req: Request, res: Response) => {

        try {
            const user = req.params.user
            const makeFriendship = req.query.makeFriendship

            const friendBusiness = new FriendshipBusiness()
            const deleteF = await friendBusiness.deleteFriend(user, makeFriendship as string);

            res.status(201).send({ message: "Voces nao sao mais amigos!", deleteF });
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }
}