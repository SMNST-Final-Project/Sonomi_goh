import mongoose from "mongoose";

const ObjectID = mongoose.Schema.Types.ObjectId; 

const cartSchema = new mongoose.Schema({
patron : {
   type: ObjectID,
   required: true,
   ref: 'User'
 },
products: [{
  productId: {
   type: ObjectID,
   ref: 'Product',
   required: true
},
quantity: {
   type: Number,
   required: true,
   min: 1,
   default: 1},
}],
}, {
timestamps: true
})

export default mongoose.model('Cart', cartSchema); 