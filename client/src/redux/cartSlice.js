import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(existingIndex);
      if (existingIndex >= 0) {
        state.products[existingIndex] = {
          ...state.products[existingIndex],
          cartQuantity: state.products[existingIndex].cartQuantity + 1,
        };
      } else {
        let tempProduct = { ...action.payload, cartQuantity: 1 };
        state.products.push(tempProduct);
      }
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    decreaseProduct(state, action) {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.products[itemIndex].cartQuantity > 1) {
        state.products[itemIndex].cartQuantity -= 1;
      } else if (state.products[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.products.filter(
          (item) => item.id !== action.payload.id
        );

        state.products = nextCartItems;
      }

      localStorage.setItem("products", JSON.stringify(state.products));
    },
    removeProduct(state, { payload }) {
      state.products.map((cartItem) => {
        if (cartItem.id === payload.id) {
          const nextCartItems = state.products.filter(
            (item) => item.id !== cartItem.id
          );

          state.products = nextCartItems;
        }
        localStorage.setItem("products", JSON.stringify(state.products));
        return state;
      });
    },
    getTotals(state, action) {
      let { total, quantity } = state.products.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.products = [];
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

export const {
  addProduct,
  decreaseProduct,
  removeProduct,
  getTotals,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
