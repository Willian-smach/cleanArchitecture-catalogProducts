import { Product } from "../core/entities/Product";

class AdapterProduct {
    static create (productName: string, description: string, value: number, id?: string) {
        return new Product(productName, description, value, id);
    }
}

export { AdapterProduct };