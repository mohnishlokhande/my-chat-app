import EmptyPage from "./components/emptyPage";
import SideBar from "./components/sideBar";

function App() {
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <SideBar />
      <EmptyPage />
    </div>
  );
}

export default App;
