import { PlusCircleOutlined } from "@ant-design/icons";
import styles from "./SideBar.module.css";
import ChatBlock from "./chatBlock";
import { useChatStore } from "../../store/chatStore";

function SideBar() {
  const { chats, addChat } = useChatStore();
  return (
    <div className={styles.sidebar}>
      <div className={styles.chatHeader}>
        <h2>Chats</h2>
        <PlusCircleOutlined
          className={styles.addChat}
          onClick={() => {
            addChat({ name: "Check", message: "Hello", time: "11:00" });
            console.log("Add chat clicked");
          }}
        />
      </div>

      <input placeholder="Find a Chat" className={styles.searchBox} />

      {/* <ChatBlock name="Mohnish" message="Hello" time="10:00" isSelf={true} /> */}
      {chats?.map((chat, index) => {
        return (
          <ChatBlock
            key={index}
            name={chat.name}
            message={chat.message}
            time={chat.time}
            isSelf={chat.isSelf}
          />
        );
      })}
    </div>
  );
}

export default SideBar;
