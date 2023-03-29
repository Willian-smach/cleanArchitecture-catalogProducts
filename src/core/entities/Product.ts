import { uuid } from "uuidv4";

class Product {

    public readonly id: string;
    public productName: string;
    public description: string;
    public value: number;

    constructor(productName: string, description: string, value: number) {
        this.productName = productName;
        this.description = description;
        this.value = value;
        this.id = uuid();
    }
    
}

export { Product };