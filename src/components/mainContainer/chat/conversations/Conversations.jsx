import { useEffect, useMemo, useRef } from "react";
import {
  useChatStore,
  useConversationStore,
} from "../../../../store/chatStore";
import styles from "./Conversations.module.css";
import MessageBlock from "./messageBlock/MessageBlock";

function Conversations() {
  const messagesEndRef = useRef(null);
  const { activeChat } = useChatStore();
  const { conversations } = useConversationStore();
  const currMsgs = useMemo(
    () => conversations[activeChat?.id]?.messages || [],
    [conversations, activeChat]
  );

  useEffect(() => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [currMsgs.length]);

  return (
    <>
      <div className={styles.conversations}>
        {currMsgs?.map((msg, index) => {
          return <MessageBlock key={index} message={msg} />;
        })}
        <div ref={messagesEndRef} />
      </div>
    </>
  );
}

export default Conversations;
