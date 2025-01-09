import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    selectedPatient: null,
    cartStep:1
  },
  reducers: {
    addToCart: (state, action) => {    
      const item = action.payload;
      if (!item || !item._id) return; // Exit if item or _id is undefined

      const existingItem = state.items.find((i) => i._id === item._id);
      // console.log('existingItem',existingItem)
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...item,
          quantity: 1,
          name: item.name,
          amount: item.amount,
          offer_price: item.offer_price,
          package_or_test: item.package_or_test,
          slug: item.slug,
          _id: item._id,
        });
      }
    },
    addPatientItemToCart: (state, action) => {
      state.selectPatientsItems = action.payload;
      console.log("state.selectPatientsItems", action.payload);
    },

    removeFromCart: (state, action) => {
      console.log("state.items", state.items);

      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    selectPatient: (state, action) => {
      state.selectedPatient = action.payload ?? null;
    },
    setCartStep: (state, action) => {
      cartStep = action.payload ?? 1;
    }
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  addPatientItemToCart,
  selectPatient,
  setCartStep
} = cartSlice.actions;
export default cartSlice.reducer;
