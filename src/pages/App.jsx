import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatContent from "../components/main/chatContent";
import SideBar from "../components/sidebar/sideBar";

function App() {
  return (
    <Router>
      <div className="flex h-screen border-2 border-black">
        <SideBar />
        <div className="w-full">
          <Routes>
            <Route path="/chatbox/:chatId" element={<ChatContent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
