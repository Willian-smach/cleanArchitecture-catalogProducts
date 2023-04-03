import { Product } from "../entities/Product";
import { RegisterNewProductDTO } from "../usecases/DTO/RegisterNewProductDTO";

interface ProductRepository {
    register(product: RegisterNewProductDTO) : Promise<boolean>;
    find(id: string) : Promise<Product>;
    findByName(productName: string) : Promise<boolean>;
    findAll() : Promise<any>;
    update(product: Product) : Promise<boolean>; 
    delete(id: string) : Promise<boolean>;
}

export{ ProductRepository };