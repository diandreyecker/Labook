import { v4 } from "uuid"

export abstract class IdGenerator {
    static generateId = () => {
        return v4()
    }
}