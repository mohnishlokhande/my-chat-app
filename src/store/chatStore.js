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
  addChat: (chat) => set((state) => ({ chats: [...state.chats, chat] })),
}));

export const useConversationStore = create((set) => ({
  mainView: MAIN_VIEW.EMPTY,
  setMainView: (item) => set({ item }),
  activeConversation: null,
  setActiveConversation: (item) => set({ item }),
  conversations: conversationInitialState,
  addConversation: (conversation) =>
    set((state) => {
      ({ conversations: [...state.conversations, conversation] });
    }),
  //   addMessage: (conversationId, message) =>
  //     set((state) => {
  //       ({ conversations: [...state.conversations] });
  //     }),
}));
