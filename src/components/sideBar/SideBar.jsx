import { PlusCircleOutlined } from "@ant-design/icons";
import styles from "./SideBar.module.css";
import ChatBlock from "./chatBlock";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.chatHeader}>
        <h2>Chat</h2>
        <PlusCircleOutlined
          className={styles.addChat}
          onClick={() => {
            console.log("Add chat clicked");
          }}
        />
      </div>

      <input placeholder="Find a Chat" className={styles.searchBox} />

      <ChatBlock name="Mohnish" message="Hello" time="10:00" isSelf={true} />
    </div>
  );
}

export default SideBar;
