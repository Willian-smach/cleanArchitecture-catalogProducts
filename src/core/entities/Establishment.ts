import { uuid } from "uuidv4";

class Establishment {
    private readonly id: string;
    public name: string;
    private email: string;
    private password: string;

    constructor(name: string, email: string, password: string, id?: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        if(!id){
            this.id = uuid();
        }else{
            this.id = id;
        }
    }

    public get getId() {
        return this.id;
    }

    public get getPassword() {
        return this.password;
    }

    public get getEmail(){
        return this.email;
    }

}

export { Establishment }