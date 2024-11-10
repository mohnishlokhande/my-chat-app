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
  chats: chatInitialState,
  activeChat: null,
  addChat: (chat) =>
    set((state) => {
      let len = state?.chats?.length || 1;
      let newChat = { ...chat, id: len + 1 };
      return { chats: [newChat, ...state.chats], activeChat: newChat };
    }),
  updateChats: (item) => set({ chats: item }),
  setActiveChat: (item) => set({ activeChat: item }),
}));

export const useConversationStore = create((set) => ({
  mainView: MAIN_VIEW.EMPTY,
  setMainView: (item) => set({ mainView: item }),
  conversations: conversationInitialState,
  addConversation: (conversation) =>
    set((state) => {
      ({ conversations: [...state.conversations, conversation] });
    }),
  addMessage: (conversationId, message) =>
    set((state) => {
      const conversation = state.conversations[conversationId] || {
        idx: 1,
        messages: [],
      };
      conversation.messages.push(message);
      return {
        conversations: {
          ...state.conversations,
          [conversationId]: conversation,
        },
      };
    }),
}));
