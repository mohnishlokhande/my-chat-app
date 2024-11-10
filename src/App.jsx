import MainContainer from "./components/mainContainer";
import SideBar from "./components/sideBar";

function App() {
  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <SideBar />
      <MainContainer />
    </div>
  );
}

export default App;
