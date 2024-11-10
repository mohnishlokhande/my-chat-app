import { useState } from "react";
import styles from "./Editor.module.css";
import { SendOutlined } from "@ant-design/icons";
import {
  useChatStore,
  useConversationStore,
} from "../../../../store/chatStore";

function Editor() {
  const [message, setMessage] = useState("");
  const { chats, activeChat, updateChats } = useChatStore();
  const { conversations, addMessage } = useConversationStore();

  const currConversation = conversations[activeChat?.id] || [];

  const handleSend = () => {
    if (message.trim() === "") return;
    let newmsg = {
      id: currConversation?.idx + 1,
      sender: 1,
      content: message,
      timestamp: new Date().toLocaleTimeString(),
    };
    addMessage(activeChat?.id, newmsg);
    const index = chats.findIndex((obj) => obj.id === activeChat?.id);
    if (index > -1) {
      let updatedChats = chats;
      const [editedObj] = updatedChats.splice(index, 1);
      updatedChats.unshift({
        ...editedObj,
        lastMsg: message,
        time: new Date().toLocaleTimeString(),
      });
      updateChats(updatedChats);
    }
    setMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={styles.editor}>
      <textarea
        value={message}
        className={styles.blended_textarea}
        placeholder="Type your message..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        onKeyPress={handleKeyPress}
      ></textarea>
      <SendOutlined className={`btn ${styles.sendBtn}`} onClick={handleSend} />
    </div>
  );
}

export default Editor;
