import { ProductMongo } from "../../models/ProductMongo";
import { Product } from "../entities/Product";
import { ProductRepository } from "../interfaces/ProductRepository";
import { RegisterNewProductDTO } from "./DTO/RegisterNewProductDTO";

export default class RegisterNewProduct {
    productRepo: ProductRepository;
    msg: string = '';

    constructor(productRepo: ProductRepository) {
        this.productRepo = productRepo;
    }

    async exec(data: RegisterNewProductDTO) {
        if(!data.productName) {
            return this.msg = 'All fields must be filled';
        }
        if(!data.description) {
            return this.msg = 'All fields must be filled';
        }
        if(!data.value) {
            return this.msg = 'All fields must be filled';
        }

        const verifyExistenceProduct = await this.productRepo.findByName(data.productName);
        if(verifyExistenceProduct == true){
            return this.msg = 'The product already exists!!';
        }

        const productRegister = await this.productRepo.register(data);
        
        if(productRegister == true) {
            return this.msg = 'Successful Registration!!';
        }else{
            return this.msg = 'Registration Failure!!';
        }
    }
}