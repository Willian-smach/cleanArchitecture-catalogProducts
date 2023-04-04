import { uuid } from "uuidv4";
import { AdapterProduct } from "../adapter/AdapterProduct";
import { GetProduct } from "../core/usecases/DTO/GetProduct";
import { GetAllProducts } from "../core/usecases/GetAllProducts";
import RegisterNewProduct from "../core/usecases/RegisterNewProduct";
import { ProductRepositoryMongo } from "../infra/repository/ProductRepositoryMongo";

class ProductController {
    static async getAllProducts(params, body) {
        const productRepositoryMongo = new ProductRepositoryMongo();
        const getAllProducts = new GetAllProducts(productRepositoryMongo);
        const products = await getAllProducts.exec();
        return products;
    }
    static async registerProducts(params, body) {
        const productRepositoryMongo = new ProductRepositoryMongo();
        const registerProduct = new RegisterNewProduct(productRepositoryMongo);
        const product = AdapterProduct.create(body.productName, body.description, body.value);
        console.log(product);
        const confirm = await registerProduct.exec(product);
        return confirm;
    }

    static async getProduct(params, body) {
        const productRepositoryMongo = new ProductRepositoryMongo();
        const getProduct = new GetProduct(productRepositoryMongo);
        //console.log(params);
        const product = await getProduct.exec(params.id);
        return product;
    }
}

export { ProductController };