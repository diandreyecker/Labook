
export interface PostInputDTO {
    photo: string,
    description: string,
    type: string,
    createdAt: Date,
    authorId: string,
}

export interface InsertPostInputDTO {
    id: string,
    photo: string,
    description: string,
    type: string,
    created_at: Date,
    author_id: string,
}

export interface GetPostIdInputDTO {
    postId: string,
}