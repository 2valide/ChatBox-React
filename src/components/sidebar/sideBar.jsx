import BtnChat from "./btnChat";
import SearchBar from "./searchBar";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const handleNavigate = (chatId) => {
    navigate(`/chatbox/${chatId}`);
  };
  return (
    <div>
      <div
        className="w-64 h-full border-2 border-black bg-[#212121] shadow-[15px 15px 30px rgb(25, 25, 25),
        -15px -15px 30px rgb(60, 60, 60);]"
      >
        <SearchBar />
        <button className="w-full" onClick={() => handleNavigate("1")}>
          <BtnChat chatName="chat 1" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
