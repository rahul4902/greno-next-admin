import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  role: null, // Role can be 'user' or 'admin', with 'admin' being a type of user
  userToken: null,
  userExpireTime: null,
  permissions: [], // Array to store permissions for the user
  userDetails: null, // Additional user details like name, email, etc.
  isLoginModalVisible:false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { token, expireTime, userDetails, permissions } = action.payload;
      state.isLoggedIn = true;
      state.role = 'user'; // Default to 'user' role
      state.userToken = token; // Store the user token
      state.userExpireTime = expireTime; // Store the expiration time
      state.userDetails = userDetails; // Store additional user details
      state.permissions = permissions || []; // Store permissions if available
    },
    loginAdmin: (state, action) => {
      const { token, expireTime, userDetails, permissions } = action.payload;
      state.isLoggedIn = true;
      state.role = 'admin'; // Admin is a specific type of user role
      state.userToken = token; // Store the user token
      state.userExpireTime = expireTime; // Store the expiration time
      state.userDetails = userDetails; // Store additional user details
      state.permissions = permissions || []; // Store permissions if available
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.role = null; // Reset role on logout
      state.userToken = null; // Clear user token
      state.userExpireTime = null; // Clear expiration time
      state.userDetails = null; // Clear user details
      state.permissions = []; // Clear permissions
    },
    updatePermissions: (state, action) => {
      state.permissions = action.payload; // Update user permissions
    },
    setRole: (state, action) => {
      state.role = action.payload; // Set or update the user’s role (e.g., 'user' or 'admin')
    },
    toggleLoginModal: (state) => {
      state.isLoginModalVisible = !state.isLoginModalVisible; // Toggle modal visibility
    },
  },
});

// Exporting actions to be dispatched
export const { loginUser, loginAdmin, logout, updatePermissions, setRole,toggleLoginModal } = authSlice.actions;

// Selector to check if user is logged in
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

// Selector to get user role
export const selectRole = (state) => state.auth.role;

// Selector to get user token
export const selectUserToken = (state) => state.auth.userToken;

// Selector to get user expiration time
export const selectUserExpireTime = (state) => state.auth.userExpireTime;

// Selector to get user permissions
export const selectPermissions = (state) => state.auth.permissions;

// Selector to get user details
export const selectUserDetails = (state) => state.auth.userDetails;

export default authSlice.reducer;
