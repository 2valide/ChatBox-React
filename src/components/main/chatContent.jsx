import { useState, useEffect } from "react";
import "./card.css";
import { firestore } from "./firebase";
import { useParams } from "react-router-dom";

const ChatContent = () => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");

  useEffect(() => {
    const unsubscribe = firestore
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .orderBy("time")
      .onSnapshot((snapshot) => {
        const loadedMessages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(loadedMessages);
      });

    return () => {
      unsubscribe();
    };
  }, [chatId]);

  const handleSend = () => {
    if (input.trim()) {
      const message = {
        text: input,
        time: new Date().toISOString(),
        sender: "user",
      };
      firestore
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .add(message);
      setInput("");
    }
  };

  const handleSend2 = () => {
    if (input2.trim()) {
      const message = {
        text: input2,
        time: new Date().toISOString(),
        sender: "user2",
      };
      firestore
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .add(message);
      setInput2("");
    }
  };

  return (
    <div className="flex flex-col h-screen p-40">
      <div className="flex-grow border rounded-lg overflow-hidden shadow-lg card flex flex-col">
        <div className="bg-gray-200 p-4 border-b">
          <h1 className="text-lg font-semibold">Chat {chatId}</h1>
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
                  {new Date(message.time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
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
