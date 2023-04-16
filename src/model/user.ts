export class UserCreateInputDTO {
    private name: string;
    private email: string;
    private password: string;
    constructor(
        name: string,
        email: string,
        password: string) {

        this.name = name;
        this.email = email;
        this.password = password
    }

    public getName() {
        return this.name
    }
    public getEmail() {
        return this.email
    }
    public getPassword() {
        return this.password
    }
}

export class User {
    private id: string;
    private name: string;
    private email: string;
    private password: string;
    constructor(
        id: string,
        name: string,
        email: string,
        password: string) {

        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password
    }
    public getId() {
        return this.id
    }
}