const BtnChat = ({ chatName }) => {
  return (
    <>
      <div className="flex justify-center content-center p-2 mx-5 border-2 border-white">
        <button>
          <span className="text-white">{chatName}</span>
        </button>
      </div>
      <br />
    </>
  );
};

export default BtnChat;
