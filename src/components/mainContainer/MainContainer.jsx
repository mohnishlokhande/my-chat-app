import { useConversationStore } from "../../store/chatStore";
import { MAIN_VIEW } from "../../utils/constants";
import EmptyPage from "../emptyPage";
import Chat from "./chat";
import styles from "./MainContainer.module.css";
import NewMessage from "./newMessage";

function MainContainer() {
  const { mainView } = useConversationStore();

  return (
    <div className={styles.mainContainer}>
      {mainView === MAIN_VIEW.EMPTY && <EmptyPage />}
      {mainView === MAIN_VIEW.NEWCHAT && <NewMessage />}
      {mainView === MAIN_VIEW.CHAT && <Chat />}
    </div>
  );
}

export default MainContainer;
