// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import chatReducer from './slices/chatSlice';  // Import the chatSlice reducer


const store = configureStore({
  reducer: {
    user: userReducer,  // Adding the user slice to the store
    chat: chatReducer,
  },
});

export default store;
