import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
item: {
   type: String,
   required: true,
   unique: true
},
description: {
  type: String,
  required: true
},
categories: {
   type: [String],
   required: true
},
price: {
   type: Number,
   required: true
},
img: {
   type: String,
   required: true
}
}, {
timestamps: true
})

export default mongoose.model('Product', productSchema); 