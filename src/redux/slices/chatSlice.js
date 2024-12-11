import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chatHistory: [], // Store chat history for multiple chats
  currentChat: null, // Currently active chat ID or object
  isLoading: false, // Indicates loading state for messages
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    // Set the messages for the current chat
    setMessages: (state, action) => {
      const { chatId, messages } = action.payload;
      const existingChatIndex = state.chatHistory.findIndex(chat => chat.id === chatId);

      if (existingChatIndex > -1) {
        // Update messages for existing chat
        state.chatHistory[existingChatIndex].messages = messages;
      } else {
        // Add a new chat with its messages
        state.chatHistory.push({ id: chatId, messages });
      }
    },

    // Set the current active chat
    setCurrentChat: (state, action) => {
      state.currentChat = action.payload;
    },

    // Set loading state
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    // Add a single message to a chat
    addMessage: (state, action) => {
      const { chatId, message } = action.payload;
      const existingChatIndex = state.chatHistory.findIndex(chat => chat.id === chatId);

      if (existingChatIndex > -1) {
        // Add message to the existing chat
        state.chatHistory[existingChatIndex].messages.push(message);
      } else {
        // Create a new chat if it doesn't exist
        state.chatHistory.push({ id: chatId, messages: [message] });
      }
    },

    // Clear chat history
    clearChatHistory: (state) => {
      state.chatHistory = [];
    },
  },
});

export const { setMessages, setCurrentChat, setLoading, addMessage, clearChatHistory } =
  chatSlice.actions;

export default chatSlice.reducer;
