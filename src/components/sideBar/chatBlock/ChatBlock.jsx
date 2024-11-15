import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./ChatBlock.module.css";
import PropTypes from "prop-types";
import { useChatStore, useConversationStore } from "../../../store/chatStore";
import { MAIN_VIEW } from "../../../utils/constants";

function ChatBlock(props) {
  const { chats, activeChat, setActiveChat, updateChats } = useChatStore();
  const { removeConversation, setMainView } = useConversationStore();
  const { chat } = props;

  const { id, name, lastMsg = "", time, participants } = chat;
  const isSelf = participants.length === 1; //length 1 if self, length 2 if dm, length > 2 if group
  const isSelected = activeChat?.id === id;

  const selectChat = () => {
    setActiveChat(chat);
    setMainView(MAIN_VIEW.CHAT);
  };

  const closeChat = (e) => {
    e.stopPropagation();
    // closing chat from main view only if it is active
    if (activeChat?.id === id) {
      setMainView(MAIN_VIEW.EMPTY);
      setActiveChat(null);
    }
    const index = chats.findIndex((obj) => obj.id === id);
    if (index > -1) {
      let updatedChats = chats;
      updatedChats.splice(index, 1);
      updateChats(updatedChats);
      removeConversation(id);
    }
  };

  return (
    <div
      className={`${styles.chatRow} glow-text`}
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
          <h3>{name}</h3>&nbsp;&nbsp;
          {isSelf && <div className={styles.secondary_text}> you</div>}
        </div>
        <div className={styles.truncate}>{lastMsg}</div>
      </div>
      <div className={styles.chatInfo}>
        {/* if chat is self, don't show close button */}
        {isSelf ? (
          <div />
        ) : (
          <CloseOutlined className={styles.crossBtn} onClick={closeChat} />
        )}
        <div className={styles.secondary_text}>{time?.slice(0, -3)}</div>
      </div>
    </div>
  );
}

ChatBlock.propTypes = {
  chat: PropTypes.object,
};

export default ChatBlock;
