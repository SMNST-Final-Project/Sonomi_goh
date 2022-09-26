import { createSlice } from '@reduxjs/toolkit' 

const initialState = {
    products: [],
    quantity: 0,
    total: 0

}

const cartSlice = createSlice({
    name: 'cart', 
    initialState,
    reducers: {
        addProduct: (state, { payload }) => {
        state.quantity += payload.quantity; 
        state.products.push(payload);
        state.total += payload.price * payload.quantity;
        }
    }
})
 

export const { addProduct } = cartSlice.actions; 
export default cartSlice.reducer