import { Product } from "../entities/Product";
import { ProductRepository } from "../interfaces/ProductRepository";

export class UpdateProduct {
    productRepo: ProductRepository;

    constructor(productRepo: ProductRepository) {
        this.productRepo = productRepo;
    }

    async exec(product: Product) {
        const update = this.productRepo.update(product);
        if(update) {
            return {msg: 'Successful Update!!'}
        }else{
            return {msg: 'Updating Failure!!'}
        }
    }
}