import { ProductRepositoryMemory } from "../../infra/repository/ProductRepositoryMemory";
import { Product } from "../entities/Product";
import { GetAllProducts } from "./GetAllProducts";
import RegisterNewProduct from "./RegisterNewProduct";
/*
test.skip("Should be register a new product", async () => {
    const productRepositoryMemory = new ProductRepositoryMemory();
    const registerNewProduct = new RegisterNewProduct(productRepositoryMemory);
    const productRegister = await registerNewProduct.exec(new Product("Produto de teste", "Teste", 18.00));
    expect(productRegister).toBe('Successful Registration!!');
});

test.skip("Should be return all products", async () => {
    const productRepositoryMemory = new ProductRepositoryMemory();
    const registerNewProduct = new RegisterNewProduct(productRepositoryMemory);
    await registerNewProduct.exec(new Product("Produto de teste", "Teste", 18.00));
    await registerNewProduct.exec(new Product("Produto de teste2", "Teste2", 20.00));
    await registerNewProduct.exec(new Product("Produto de teste3", "Teste3", 22.00));
    const getAll = new GetAllProducts(productRepositoryMemory);
    console.log(await getAll.exec());
});*/