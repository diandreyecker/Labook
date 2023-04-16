enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export interface PostInputDTO {
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string,
}

export interface InsertPostInputDTO {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    created_at: Date,
    author_id: string,
}
