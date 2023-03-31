import { Product } from "../core/entities/Product";
import { RegisterNewProductDTO } from "../core/usecases/DTO/RegisterNewProductDTO";

class AdapterProduct {
    static create (data: RegisterNewProductDTO, id?: string) {
        return new Product(data, id);
    }
}

export { AdapterProduct };