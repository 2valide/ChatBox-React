import { useState } from "react";

const ChatContent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        {
          text: input,
          id: messages.length,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          sender: "user",
        },
      ]);
      setInput("");
    }
  };
  const handleSend2 = () => {
    if (input2.trim()) {
      setMessages([
        ...messages,
        {
          text: input2,
          id: messages.length,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          sender: "user2",
        },
      ]);
      setInput2("");
    }
  };

  return (
    <div className="flex flex-col h-screen p-40 bg-gray-100">
      <div className="flex-grow border rounded-lg overflow-hidden shadow-lg bg-white flex flex-col">
        <div className="bg-gray-200 p-4 border-b">
          <h1 className="text-lg font-semibold">chat1</h1>
        </div>
        <div className="p-4 flex-grow overflow-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-4 rounded-lg max-w-xs md:max-w-md ${
                  message.sender === "user" ? "bg-blue-100" : "bg-gray-100"
                }`}
              >
                <p className="text-sm break-words">{message.text}</p>
                <p className="text-xs text-gray-500 text-right mt-1">
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow border rounded p-2"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Send
        </button>
      </div>

      <div className="mt-2 flex">
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          className="flex-grow border rounded p-2"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend2}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatContent;
