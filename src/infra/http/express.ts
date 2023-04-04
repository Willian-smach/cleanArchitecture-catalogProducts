import express from "express";
import ExpressAdapter from "../../adapter/ExpressAdapter";
import { ProductController } from "../../controller/ProductController";
import mongoose from "mongoose";

const app = express();
const PORT = 3001;
app.use(express.json());

app.get("/product/:id", ExpressAdapter.create(ProductController.getProduct));
app.get("/products", ExpressAdapter.create(ProductController.getAllProducts));
app.post("/product", ExpressAdapter.create(ProductController.registerProducts));
app.patch("/product/:id", ExpressAdapter.create(ProductController.updateProduct));


mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017')
.then(() => {
    console.log('MongoDB Connected');
})
.catch(() => console.log('Error to connect DB'));

app.listen(PORT, () => {
    console.log(`Express run on port: ${PORT}`);
});