import { UserOutlined } from "@ant-design/icons";
import styles from "./Chat.module.css";
import { useChatStore } from "../../../store/chatStore";

function Chat() {
  const { activeChat } = useChatStore();

  return (
    <div className={styles.chatHeader}>
      <UserOutlined style={{ fontSize: "xx-large", paddingRight: "1rem" }} />
      <h3>{activeChat?.name}</h3>
    </div>
  );
}

export default Chat;
