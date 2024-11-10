import MainContainer from "./components/mainContainer";
import SideBar from "./components/sideBar";
import styles from "./App.module.css";
import Footer from "./components/footer";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.mainContainer}>
        <SideBar />
        <MainContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
