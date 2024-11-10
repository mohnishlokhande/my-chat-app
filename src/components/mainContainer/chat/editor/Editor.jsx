import { useState } from "react";
import styles from "./Editor.module.css";
import { SendOutlined } from "@ant-design/icons";

function Editor() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    setMessage("");
    console.log("Message sent:", message);
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
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
      ></textarea>
      <SendOutlined className={`btn ${styles.sendBtn}`} onClick={handleSend} />
    </div>
  );
}

export default Editor;
