import { model, Schema } from "mongoose";

class AdapterProductMongoose {
    static adapter() {
        const modelProduct = model('product', new Schema({
            id: String,
            productNmae: String,
            description: String,
            value: Number
        }));
        return modelProduct;
    }
}

export{ AdapterProductMongoose };