import { ProductRepository } from "../../interfaces/ProductRepository";

export class ApplyPromotion {
    productRepo: ProductRepository;

    constructor(productRepo: ProductRepository) {
        this.productRepo = productRepo;
    }

    async exec(promotion: number) {
        
    }
}