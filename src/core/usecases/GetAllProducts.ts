import { ProductRepository } from "../interfaces/ProductRepository";

class GetAllProducts {
    productRepo: ProductRepository;

    constructor(productRepo: ProductRepository) {
        this.productRepo = productRepo;
    }

    async exec() {
        return await this.productRepo.findAll();
    }
}

export{ GetAllProducts };