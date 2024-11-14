import { create } from "zustand";
import {
  chatInitialState,
  contactsInitialState,
  conversationInitialState,
} from "./initialStates";
import { MAIN_VIEW } from "../utils/constants";

export const useContactStore = create((set) => ({
  contacts: contactsInitialState,
  addContacts: (item) =>
    set((state) => ({ contacts: [...state.contacts, item] })), // not adding new contacts for now
}));

export const useChatStore = create((set) => ({
  idx: 1, // maintaining index for chat objects
  chats: chatInitialState, //array of chat objects, displayed in the sidebar
  activeChat: null,
  addChat: (chat) =>
    set((state) => {
      let len = state?.idx || 1;
      let newChat = { ...chat, id: len + 1 };
      return {
        chats: [newChat, ...state.chats],
        activeChat: newChat, // set active chat to the new chat
        idx: len + 1, // increment index
      };
    }),
  updateChats: (item) => set({ chats: item }),
  setActiveChat: (item) => set({ activeChat: item }),
}));

export const useConversationStore = create((set) => ({
  mainView: MAIN_VIEW.EMPTY, // flag to determine which view to display in the main container
  setMainView: (item) => set({ mainView: item }),

  conversations: conversationInitialState,
  addConversation: (conversation) =>
    set((state) => {
      ({ conversations: [...state.conversations, conversation] });
    }),
  addMessage: (conversationId, message) =>
    set((state) => {
      const conversation = state.conversations[conversationId] || {
        idx: 0, // if conversation doesn't exist, create a new one
        messages: [],
      };
      const newMessage = {
        id: conversation.idx + 1,
        sender: 1,
        content: message,
        timestamp: new Date().toLocaleTimeString(),
      };
      conversation.messages.push(newMessage);
      conversation.idx += 1;
      return {
        conversations: {
          ...state.conversations,
          [conversationId]: conversation,
        },
      };
    }),
  removeConversation: (conversationId) =>
    set((state) => {
      let updatedconversations = state.conversations;
      delete updatedconversations[conversationId];
      return { conversations: updatedconversations };
    }),
  updateMessage: (conversationId, messageId, message) =>
    set((state) => {
      let conversation = state.conversations[conversationId] || {
        idx: 0, // if conversation doesn't exist, create a new one
        messages: [],
      };
      let updatedMessage = conversation.messages.find(
        (msg) => msg.id === messageId
      );
      updatedMessage.content = message;
      return {
        conversations: {
          ...state.conversations,
          [conversationId]: conversation,
        },
      };
    }),
  deleteMessage: (conversationId, messageId) =>
    set((state) => {
      let conversation = state.conversations[conversationId] || {
        idx: 0, // if conversation doesn't exist, create a new one
        messages: [],
      };
      conversation.messages = conversation.messages.filter(
        (msg) => msg.id !== messageId
      );

      console.log("####conversation: ", messageId, conversation);
      return {
        conversations: {
          ...state.conversations,
          [conversationId]: conversation,
        },
      };
    }),
}));
