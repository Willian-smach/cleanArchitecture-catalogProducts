import Express from "express";
import ExpressAdapter from "../../controller/ExpressAdapter";
import { ProductController } from "../../controller/ProductController";
import mongoose from "mongoose";

const app = new Express();
const PORT = 3000;

app.get("/products", ExpressAdapter.create(ProductController.getAllProducts));
app.post("/product", ExpressAdapter.create(ProductController.registerProducts));


mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017')
.then(() => {
    console.log('MongoDB Connected');
})
.catch(() => console.log('Error to connect DB'));

app.listen(PORT, () => {
    console.log(`Express run on port: ${PORT}`);
});