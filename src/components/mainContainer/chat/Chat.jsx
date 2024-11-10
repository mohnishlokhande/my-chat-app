import { UserOutlined } from "@ant-design/icons";
import styles from "./Chat.module.css";
import { useChatStore } from "../../../store/chatStore";
import Editor from "./editor";
import Conversations from "./conversations";

function Chat() {
  const { activeChat } = useChatStore();

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <UserOutlined style={{ fontSize: "xx-large", paddingRight: "1rem" }} />
        <h3>{activeChat?.name}</h3>
      </div>
      <Conversations />
      <Editor />
    </div>
  );
}

export default Chat;
