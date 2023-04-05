import { model, Schema } from "mongoose";

const EstablishmentMongo = model('establishment', new Schema({
    id: String,
    name: String,
    email: String,
    password: String,
}));

export { EstablishmentMongo }