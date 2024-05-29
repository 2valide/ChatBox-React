import ChatContent from "../components/main/chatContent";
import SideBar from "../components/sidebar/sideBar";

function App() {
  return (
    <>
      <div className="flex h-screen border-2 border-black">
        <SideBar />
        <div className="w-full">
          <ChatContent />
        </div>
      </div>
    </>
  );
}

export default App;
