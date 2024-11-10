import styles from "../Conversations.module.css";
import PropTypes from "prop-types";

function MessageBlock(props) {
  const { message } = props;
  return (
    // if my message, align right. Else align left
    <div
      className={`${styles.message} ${
        message.sender === 1 && styles.myMessage
      }`}
    >
      {/* so that line can break */}
      <h4 style={{ paddingRight: "1rem", whiteSpace: "pre-wrap" }}>
        {message?.content}
      </h4>
      <div className={styles?.time}> {message?.timestamp?.slice(0, -3)}</div>
    </div>
  );
}
MessageBlock.propTypes = {
  message: PropTypes.object.isRequired,
};
export default MessageBlock;
