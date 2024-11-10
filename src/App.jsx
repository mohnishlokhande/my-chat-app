import MainContainer from "./components/mainContainer";
import SideBar from "./components/sideBar";
import styles from "./App.module.css";

function App() {
  return (
    <div
      className={styles.app}
      style={{ display: "flex", width: "100vw", height: "100vh" }}
    >
      <SideBar />
      <MainContainer />
    </div>
  );
}

export default App;
