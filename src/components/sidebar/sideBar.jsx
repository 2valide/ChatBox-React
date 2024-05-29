import BtnChat from "./btnChat";
import SearchBar from "./searchBar";

const SideBar = () => {
  return (
    <div>
      <div className="w-64 h-full border-2 border-black">
        <SearchBar />
        <BtnChat chatName="chat1" />
      </div>
    </div>
  );
};

export default SideBar;
