import styles from "../Conversations.module.css";
import PropTypes from "prop-types";

function MessageBlock(props) {
  const { message } = props;
  return (
    <div
      className={`${styles.message} ${
        message.sender === 1 && styles.myMessage
      }`}
    >
      {message?.content}
    </div>
  );
}
MessageBlock.propTypes = {
  message: PropTypes.object.isRequired,
};
export default MessageBlock;
