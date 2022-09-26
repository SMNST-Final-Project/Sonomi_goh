import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    //please provide a complete product object to push inside products array that should contain name,id,quantity,price,subtotal

    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      //before pushing inside the products array first make a search either that product already in that array or not

      //if already present just increase the quantity don't add the product again
      //if not simply push that whole object to the array
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      //while removing first look for that product object inside products array if the quantity is more than 1 do minus 1 and
      //if quantity is already 1 simply remove that product object from products array
      let index = state.products.indexOf(action.payload);
      state.quantity -= action.payload;
      state.products.splice(index, 1);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
