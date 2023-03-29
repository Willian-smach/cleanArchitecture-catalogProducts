import { Product } from "../entities/Product";
import { ProductRepository } from "../interfaces/ProductRepository";

export default class RegisterNewProduct {
    productRepo: ProductRepository;

    constructor(productRepo: ProductRepository) {
        this.productRepo = productRepo;
    }

    async exec(product: Product) {
        const productRegister = await this.productRepo.register(product);
        var msg: string;
        if(productRegister == true) {
            return msg = 'Successful Registration!!';
        }else{
            return msg = 'Registration Failure!!';
        }
    }
}