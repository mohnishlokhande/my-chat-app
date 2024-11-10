import { PlusCircleOutlined } from "@ant-design/icons";
import styles from "./SideBar.module.css";
import ChatBlock from "./chatBlock";
import { useChatStore, useConversationStore } from "../../store/chatStore";
import { MAIN_VIEW } from "../../utils/constants";

function SideBar() {
  const { chats } = useChatStore();
  const { setMainView } = useConversationStore();

  return (
    <div className={styles.sidebar}>
      <div className={styles.chatHeader}>
        <h2>Chats</h2>
        <PlusCircleOutlined
          className={styles.addChat}
          onClick={() => {
            setMainView(MAIN_VIEW.NEWCHAT);
          }}
        />
      </div>

      <input placeholder="Find a Chat" className={styles.searchBox} />

      {chats?.map((chat, index) => {
        return <ChatBlock key={index} chat={chat} />;
      })}
    </div>
  );
}

export default SideBar;
