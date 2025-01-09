// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import authReducer from '../authSlice'; // Import your authSlice
import cartReducer from '../cartSlice'; // Import your cartSlice

// Persist config for both auth and cart slices
const persistConfig = {
    key: 'root', 
    storage, 
    whitelist: ['auth', 'cart'], 
};

// Combine reducers for both auth and cart
const rootReducer = combineReducers({
    auth: authReducer, // Add authReducer
    cart: cartReducer, // Add cartReducer
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with persistedReducer
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable serializable check for redux-persist
        }),
});

// Initialize the persistor to manage persisted state
export const persistor = persistStore(store);

export default store;
