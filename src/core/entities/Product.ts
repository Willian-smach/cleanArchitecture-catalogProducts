import { uuid } from "uuidv4";

export class Product {

    public readonly id: string;

    public productName: string;
    public description: string;
    public value: number;

    constructor(productName: string, description: string, value: number, id?: string) {
        this.productName = productName;
        this.description = description;
        this.value = value;

        if(!id){
            this.id = uuid();
        }else{
            this.id = id;
        }
    }

    discount(percent: number) {
        const desc = this.value*(percent/100);
        const res = this.value - desc;
        return res;
    }
    
}