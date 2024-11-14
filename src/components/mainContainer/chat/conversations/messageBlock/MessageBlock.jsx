import { useEffect, useState } from "react";
import styles from "../Conversations.module.css";
import PropTypes from "prop-types";
// import { EditOutlined } from "@ant-design/icons";
import {
  useChatStore,
  useConversationStore,
} from "../../../../../store/chatStore";
import { DeleteOutlined } from "@ant-design/icons";

function MessageBlock(props) {
  const { message } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [msg, setMsg] = useState(message.content);
  const { updateMessage, deleteMessage } = useConversationStore();
  const { activeChat } = useChatStore();

  const onSelectMsg = () => {
    if (message.sender !== 1) return;
    setIsEditing(true);
  };
  const onblur = () => {
    updateMessage(activeChat?.id, message.id, msg);
    setIsEditing(false);
  };
  const onMsgChange = (e) => {
    setMsg(e.target.value);
  };

  const onMsgDelete = () => {
    deleteMessage(activeChat?.id, message.id);
  };

  useEffect(() => {
    if (message.content) {
      setMsg(message.content);
    }
  }, [message.content]);

  // console.log("##", message);
  return (
    // if my message, align right. Else align left
    <>
      <div
        className={`${styles.message} ${
          message.sender === 1 && styles.myMessage
        }`}
      >
        {isEditing ? (
          <input
            type="text"
            value={msg}
            onChange={onMsgChange}
            onBlur={onblur}
          />
        ) : (
          <>
            <DeleteOutlined onClick={onMsgDelete} />
            <h4
              style={{ paddingRight: "1rem", whiteSpace: "pre-wrap" }}
              onClick={onSelectMsg}
            >
              {message?.content}
            </h4>
            <div className={styles?.time}>
              {message?.timestamp?.slice(0, -3)}
            </div>
          </>
        )}

        {/* so that line can break */}
      </div>
    </>
  );
}
MessageBlock.propTypes = {
  message: PropTypes.object.isRequired,
};
export default MessageBlock;
