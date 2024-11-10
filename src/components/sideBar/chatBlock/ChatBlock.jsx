import { UserOutlined } from "@ant-design/icons";
import styles from "./ChatBlock.module.css";
import PropTypes from "prop-types";

function ChatBlock(props) {
  const {
    name,
    message = "",
    time,
    isSelf = false,
    isSelected = false,
  } = props;
  return (
    <div
      className={styles.chatRow}
      style={{
        backgroundColor: isSelected
          ? "var(color_background_selected)"
          : "var(--color_background)",
      }}
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
  name: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.string,
  avatar: PropTypes.string,
  isSelf: PropTypes.bool,
  isSelected: PropTypes.bool,
};

export default ChatBlock;
