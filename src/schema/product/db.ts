// product/db.js
import { Schema, model } from 'mongoose'

const schema = new Schema({
       name: String,
       price: Number,
       desc: String
})
// helper function
export const aggregateProduct = () => {
     // whatever
}
export const ProductModel = model("product", schema, "product")
