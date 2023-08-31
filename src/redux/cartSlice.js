import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  subtotal: 0,
  shipping: 0,
  tax: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const isItemExist = state.cartItems.find((i) => i.id === item.id);

      if (isItemExist) {
        isItemExist.quantity += 1;
      } else {
        state.cartItems.push(item);
      }
    },
    increment: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);

      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const id = action.payload;

      const item = state.cartItems.find((i) => i.id === id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;

      state.cartItems = state.cartItems.filter((i) => i.id !== id);
    },
    calculateTotal: (state) => {
      let sum = 0;
      state.cartItems.forEach((i) => {
        sum += i.price * i.quantity;
        state.subtotal = sum;
        state.shipping = state.subtotal > 1000 ? 0 : 100;
        state.tax = +(state.subtotal * 0.18).toFixed();
        state.total = state.subtotal + state.shipping + state.tax;
      });
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, increment, decrement, deleteItem, calculateTotal } =
  cartSlice.actions;
