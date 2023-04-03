import { ProductRepository } from "../../interfaces/ProductRepository";

export class GetProduct {
    productRepo: ProductRepository;

    constructor(productRepo: ProductRepository) {
        this.productRepo = productRepo;
    }

    async exec(id: string) {
        const product = this.productRepo.find(id);
        if(product){
            return product;
        }else{
            return {msg: 'Product Not Found!!'};
        }
    }
}