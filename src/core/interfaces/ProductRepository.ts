import { Product } from "../entities/Product";

interface ProductRepository {
    register(product: Product) : Promise<boolean>;
    find(id: string) : Promise<Product>;
    findAll() : Promise<any>;
    update(product: Product) : Promise<boolean>; 
    delete(id: string) : Promise<boolean>;
}

export{ ProductRepository };