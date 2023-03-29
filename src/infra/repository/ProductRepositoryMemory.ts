import { Product } from "../../core/entities/Product";
import { ProductRepository } from "../../core/interfaces/ProductRepository";

class ProductRepositoryMemory implements ProductRepository {

    products: Product[] = [];

    async register(product: Product): Promise<boolean> {
        const data = await {
            id: product.id,
            productName: product.productName,
            description: product.description,
            value: product.value
        }

        this.products.push(data);
        return !!data;
    }
    
    find(id: string): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    async findAll(): Promise<any> {
        const allProducts = await this.products;
        if(allProducts) {
            return Promise.resolve(allProducts);
        }
        throw new Error("There are no registered products");
    }
    update(product: Product): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}

export{ ProductRepositoryMemory };