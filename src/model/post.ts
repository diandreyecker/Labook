export enum POST_TYPES {
   NORMAL = "normal",
   EVENT = "event"
}

export class Post {
   constructor(
      public id: string,
      public photo: string,
      public description: string,
      public type: POST_TYPES,
      public created_at: Date,
      public author_id: string) { }
}

export class PostCreateInputDTO {
   constructor(
      public photo: string,
      public description: string,
      public type: POST_TYPES,
      public createdAt: Date,
      public authorId: string) { }
}

