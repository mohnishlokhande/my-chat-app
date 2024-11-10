import { useConversationStore } from "../../store/chatStore";
import { MAIN_VIEW } from "../../utils/constants";
import EmptyPage from "../emptyPage/EmptyPage";
import styles from "./MainContainer.module.css";

function MainContainer() {
  const {
    mainView,
    // setMainView,
    // activeConversation,
    // setActiveConversation,
    // conversations,
  } = useConversationStore();

  if (mainView === MAIN_VIEW.EMPTY) {
    return <EmptyPage />;
  }
  if (mainView === MAIN_VIEW.NEWCHAT) {
    return <EmptyPage />;
  }

  return <div className={styles.mainContainer}>MainContainer</div>;
}

export default MainContainer;
