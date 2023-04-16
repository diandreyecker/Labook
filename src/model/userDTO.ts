export interface UserInputDTO {
    name: string,
    email: string,
    password: string
}
export interface InsertUserInputDTO extends UserInputDTO {
    id: string
}