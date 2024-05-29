const BtnChat = ({ chatName }) => {
  return (
    <>
      <div className="flex justify-center content-center p-2 mx-5 border-2 border-black">
        <button>{chatName}</button>
      </div>
      <br />
    </>
  );
};

export default BtnChat;
