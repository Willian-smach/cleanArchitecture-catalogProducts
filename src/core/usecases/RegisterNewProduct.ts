import { Product } from "../entities/Product";
import { ProductRepository } from "../interfaces/ProductRepository";
import { RegisterNewProductDTO } from "./DTO/RegisterNewProductDTO";

export default class RegisterNewProduct {
    productRepo: ProductRepository;

    constructor(productRepo: ProductRepository) {
        this.productRepo = productRepo;
    }

    async exec(data: RegisterNewProductDTO) {
        const productRegister = await this.productRepo.register(data);
        var msg: string;
        if(productRegister == true) {
            return msg = 'Successful Registration!!';
        }else{
            return msg = 'Registration Failure!!';
        }
    }
}