import { UserOutlined } from "@ant-design/icons";
import styles from "./ChatBlock.module.css";
import PropTypes from "prop-types";

function ChatBlock(props) {
  const { name, message, time, isSelf } = props;
  return (
    <div className={styles.chatRow}>
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

ChatBlock.defaultProps = {
  avatar: "user",
  isSelf: false,
};

ChatBlock.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isSelf: PropTypes.bool,
};

export default ChatBlock;
