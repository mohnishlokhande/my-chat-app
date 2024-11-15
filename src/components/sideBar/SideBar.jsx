import { PlusCircleOutlined } from "@ant-design/icons";
import styles from "./SideBar.module.css";
import ChatBlock from "./chatBlock";
import { useChatStore, useConversationStore } from "../../store/chatStore";
import { MAIN_VIEW } from "../../utils/constants";
import { useMemo, useState } from "react";

function SideBar() {
  const { chats } = useChatStore();
  const { setMainView } = useConversationStore();
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  // filter chats based on search
  const filerChats = useMemo(() => {
    if (search === "") return chats;
    return chats.filter((chat) => {
      return chat.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [chats.length, search]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.chatHeader}>
        <h2>Chats</h2>
        <PlusCircleOutlined
          className="btn glow-text"
          onClick={() => {
            setMainView(MAIN_VIEW.NEWCHAT); // set main view to new chat for creating a new chat
          }}
        />
      </div>

      <input
        placeholder="Find a Chat"
        className={styles.searchBox}
        onChange={onSearch}
      />

      {filerChats.length === 0 && (
        <div className={styles.noChats}>No chats found!</div>
      )}

      {filerChats.map((chat, index) => {
        return <ChatBlock key={index} chat={chat} />;
      })}
    </div>
  );
}

export default SideBar;
