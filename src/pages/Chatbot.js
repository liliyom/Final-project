// src/components/Chatbot.js
import React, { useState } from "react";
const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // Add your bot logic here to reply
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "I'm still learning!", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <div>
      <div className="w-[750px] mx-auto mt-10 py-[40px]">
        <div style={{ marginleft: "300px" }} className=" ">
          <div className="bg-gray-400 h-96 p-4 rounded-md shadow-md flex flex-col justify-between">
            <div className="overflow-y-auto h-full mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-2 flex-right my-2 rounded-md max-w-xs ${
                    message.sender === "user"
                      ? "bg-red-900 ml-[300px] text-white self-end"
                      : "bg-gray-400 text-gray-900 self-start"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            s
            <div className="flex">
              <input
                type="text"
                className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none mr-[10px]"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button
                onClick={handleSend}
                className=" border border-black bg-white text-black px-4 py-2 rounded-md hover:bg-red-900"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
