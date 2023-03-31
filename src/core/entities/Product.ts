import { uuid } from "uuidv4";

export class Product {

    public readonly id: string;

    public productName: string;
    public description: string;
    public value: number;

    constructor(props: Omit<Product, "id">, id?: string) {
        Object.assign(this, props);

        if(!id){
            this.id = uuid();
        }
    }
    
}