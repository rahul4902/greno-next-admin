import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartStep:1,
    selectedPatient: null,
    selectedAddress: null,
    selectedPaymentMethod: "online",
    getCartTotalPrice:0,
    getCartOfferPrice:0,
    cartPriceToPay:0,
    coupon: null,
    discountAmount: 0
  },
  reducers: {
    addToCart: (state, action) => {    
      const item = action.payload;
      if (!item || !item._id) return;

      const existingItem = state.items?.find((i) => i._id === item._id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items?.push({
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

      state.getCartTotalPrice = state.items.reduce((acc,item)=> acc + (parseFloat(item.amount) || 0),0);
      state.getCartOfferPrice = state.items.reduce((acc,item)=> acc + (parseFloat(item.offer_price) || 0),0);
      state.cartPriceToPay = state.items.reduce((acc,item)=> acc + (parseFloat(item.amount) || 0),0) - state.discountAmount;
    },
    
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
      state.getCartTotalPrice = state.items.reduce((acc, item) => acc + (item.amount || 0), 0);
      state.getCartOfferPrice = state.items.reduce((acc,item)=> acc + (parseFloat(item.offer_price) || 0),0);
      state.cartPriceToPay = state.items.reduce((acc,item)=> acc + (parseFloat(item.amount) || 0),0) - state.discountAmount;
    },
    clearCart: (state) => {
      state.items = [];
      state.getCartTotalPrice = 0;
      state.getCartOfferPrice = 0;
      state.cartPriceToPay = 0
    },
    selectPatient: (state, action) => {
      state.selectedPatient = action.payload ?? null;
    },
    setCartStep: (state, action) => {
      state.cartStep = action.payload;
    },
    setCartAddress: (state, action) => {
      state.selectedAddress = action.payload;
    },
    setSelectedPaymentMethod: (state, action) => {
      state.selectedPaymentMethod = action.payload;
    },
    updateCouponState: (state, action) => {
      const { coupon, discountAmount } = action.payload;
      state.coupon = coupon || null; // Store all coupon details
      state.discountAmount = discountAmount || 0; // Calculate and store discount amount
      state.getCartTotalPrice = state.items.reduce((acc, item) => acc + (item.amount || 0), 0);
      state.getCartOfferPrice = state.items.reduce((acc,item)=> acc + (parseFloat(item.offer_price) || 0),0);
      state.cartPriceToPay = state.items.reduce((acc,item)=> acc + (parseFloat(item.amount) || 0),0) - state.discountAmount;
    },
    clearCoupon: (state) => {
      state.coupon = null;
      state.discountAmount = 0;
      state.getCartTotalPrice = state.items.reduce((acc, item) => acc + (item.amount || 0), 0);
      state.getCartOfferPrice = state.items.reduce((acc,item)=> acc + (parseFloat(item.offer_price) || 0),0);
      state.cartPriceToPay = state.items.reduce((acc,item)=> acc + (parseFloat(item.amount) || 0),0) - state.discountAmount;
    },
    
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  addPatientItemToCart,
  selectPatient,
  setCartStep,
  setCartAddress,
  setSelectedPaymentMethod,
  updateCouponState,
  clearCoupon
} = cartSlice.actions;
export default cartSlice.reducer;
