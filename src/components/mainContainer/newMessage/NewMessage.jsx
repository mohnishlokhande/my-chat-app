import Select from "react-select";
import styles from "./NewMessage.module.css";
import {
  useContactStore,
  useChatStore,
  useConversationStore,
} from "../../../store/chatStore";
import { useState } from "react";
import { MAIN_VIEW } from "../../../utils/constants";

function NewMessage() {
  const { contacts } = useContactStore();
  const { setMainView } = useConversationStore();
  const { chats, addChat, setActiveChat } = useChatStore();

  const [selectedOption, setSelectedOption] = useState(null);

  const addNewChat = (item) => {
    // if self, don't create a new chat
    if (item.id === 1) {
      setActiveChat(chats[0]);
      return;
    }
    const directChat = chats.find(
      (chat) =>
        chat.participants.includes(1) &&
        chat.participants.includes(item.id) &&
        chat.participants.length === 2
    );
    // if direct chat already exists, set it as active chat
    if (directChat) {
      setActiveChat(directChat);
      return;
    }
    // create a new chat
    addChat({ name: item.label, participants: [1, item.id] });
  };

  const handleSelectChange = (option) => {
    setSelectedOption(option);
    setMainView(MAIN_VIEW.CHAT);
    addNewChat(option);
  };

  return (
    <div className={styles.newMsgHeader}>
      <h3>New message</h3>
      <div className={styles.searchContact}>
        To:
        <Select
          options={contacts}
          value={selectedOption}
          onChange={handleSelectChange}
          placeholder="Search contacts"
          isClearable
          isSearchable
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "grey" : "var(--color_border)",
              backgroundColor: "var(--color_background)",
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: "var(--color_background_secondary)",
            }),
            input: (baseStyles) => ({
              ...baseStyles,
              color: "white",
            }),
            singleValue: (baseStyles) => ({
              ...baseStyles,
              color: "green",
            }),
          }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: "blue",
              primary: "black",
            },
          })}
        />
      </div>
    </div>
  );
}

export default NewMessage;
