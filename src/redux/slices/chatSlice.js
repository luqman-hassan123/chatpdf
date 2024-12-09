// src/redux/chatSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  currentChat: null,
  isLoading: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    setCurrentChat: (state, action) => {
      state.currentChat = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setMessages, setCurrentChat, setLoading, addMessage } = chatSlice.actions;

export default chatSlice.reducer;
