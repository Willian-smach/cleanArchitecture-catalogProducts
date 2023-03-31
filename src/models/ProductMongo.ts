import { model, Schema } from "mongoose";

export const ProductMongo = model('products', new Schema({
    id: String,
    productName: String,
    description: String,
    value: Number
}));