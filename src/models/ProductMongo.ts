import { model, Schema } from "mongoose";

export const ProductMongo = model('products', new Schema({
    id: String,
    productNmae: String,
    description: String,
    value: Number
}));