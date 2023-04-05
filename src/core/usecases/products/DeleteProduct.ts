import { ProductRepository } from "../interfaces/ProductRepository";

export class DeleteProduct {
    productRepo: ProductRepository;

    constructor(productRepo: ProductRepository) {
        this.productRepo = productRepo;
    }

    async exec(id: string) {
        const product = await this.productRepo.find(id);
        if(product) {
            const deleteProduct = await this.productRepo.delete(id);
            if(deleteProduct){
                return {msg: 'Product deleted!!'}
            }else{
                return {msg: 'Error from delete product!!'}
            }
        }else{
            return {msg: 'Product not found!!'}
        }
        
    }
}