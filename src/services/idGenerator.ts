import { v4 } from "uuid";

export abstract class IdGenerator {
    static generatorId = () => {
        return v4()
    }
}