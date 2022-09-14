import mongoose from "mongoose";

const ObjectID = mongoose.Schema.Types.ObjectId; 

const orderSchema = new mongoose.Schema({
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
bill: {
    type: Number,
    required: true,
    default: 0
},
address: {
    type: Object, 
    required: true
},
status: {
    type: String,
    default: 'pending'
},
}, {
timestamps: true
})

export default mongoose.model('Order', orderSchema); 