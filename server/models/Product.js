import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
title: {
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
ingredients: {
   type: Array,
   required: true
},
instructions: {
   type: Array,
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