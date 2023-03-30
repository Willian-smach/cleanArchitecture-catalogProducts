import { ProductRepository } from "../interfaces/ProductRepository";

class GetAllProducts {
    productRepo: ProductRepository;

    constructor(productRepo: ProductRepository) {
        this.productRepo = productRepo;
    }

    async exec() {
        const products = await this.productRepo.findAll();
        if(products != ''){
            return products;
        }else{
            return ({msg: 'Nothing'});
        }
    }
}

export{ GetAllProducts };