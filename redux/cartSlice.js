import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      if (!item || !item._id) return; // Exit if item or _id is undefined

      const existingItem = state.items.find((i) => i._id === item._id);
      console.log('existingItem',existingItem)
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...item,
          quantity: 1,
          name: item.name,
          amount: item.amount,
          package_or_test: item.package_or_test,
          slug: item.slug,
          _id:item._id
        });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
