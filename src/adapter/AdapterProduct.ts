import { Product } from "../core/entities/Product";
import { RegisterNewProductDTO } from "../core/usecases/DTO/RegisterNewProductDTO";

class AdapterProduct {
    static create (productName: string, description: string, value: number, id?: string) {
        return new Product(productName, description, value, id);
    }
}

export { AdapterProduct };