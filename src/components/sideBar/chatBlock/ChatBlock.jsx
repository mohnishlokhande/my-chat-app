import { UserOutlined } from "@ant-design/icons";
import styles from "./ChatBlock.module.css";
import PropTypes from "prop-types";
import { useChatStore, useConversationStore } from "../../../store/chatStore";
import { MAIN_VIEW } from "../../../utils/constants";

function ChatBlock(props) {
  const { activeChat, setActiveChat } = useChatStore();
  const { setMainView } = useConversationStore();
  const { chat } = props;

  const { id, name, message = "", time, participants } = chat;
  const isSelf = participants.length === 1;
  const isSelected = activeChat?.id === id;

  const selectChat = () => {
    setActiveChat(chat);
    setMainView(MAIN_VIEW.CHAT);
  };

  return (
    <div
      className={styles.chatRow}
      style={{
        backgroundColor: isSelected
          ? "var(--color_background_selected)"
          : "var(--color_background)",
      }}
      onClick={selectChat}
    >
      <UserOutlined style={{ fontSize: "larger" }} />
      <div className={styles.chatDetails}>
        <div style={{ display: "flex" }}>
          <h3>{name}</h3>&nbsp;&nbsp;{" "}
          {isSelf && <div className={styles.secondary_text}> you</div>}
        </div>
        <div>{message}</div>
      </div>
      <div className={styles.secondary_text}>{time}</div>
    </div>
  );
}

ChatBlock.propTypes = {
  chat: PropTypes.object,
  name: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.string,
  avatar: PropTypes.string,
  isSelf: PropTypes.bool,
  isSelected: PropTypes.bool,
};

export default ChatBlock;
