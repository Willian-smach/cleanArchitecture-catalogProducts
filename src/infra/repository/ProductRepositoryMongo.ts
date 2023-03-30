import { AdapterProductMongoose } from "../../adapter/AdapterProductMongoose";
import { Product } from "../../core/entities/Product";
import { ProductRepository } from "../../core/interfaces/ProductRepository";
import { ProductMongo } from "../../models/ProductMongo";

class ProductRepositoryMongo implements ProductRepository {
    async register(product: Product): Promise<boolean> {
        const Product = new ProductMongo({
            id: product.id,
            productName: product.productName,
            description: product.description,
            value: product.value
        });

        await Product.save();

        return !!Product;
    }
    find(id: string): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    async findAll(): Promise<any> {
        //const ProductMongo = AdapterProductMongoose.adapter();
        const products = await ProductMongo.find();
        return products;
    }
    update(product: Product): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}

export{ ProductRepositoryMongo };