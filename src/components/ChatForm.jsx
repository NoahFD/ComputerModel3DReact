import React, { useState } from "react";
import send from "@/assets/send.svg";

const ChatForm = ({ onSend }) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(prompt);
    setPrompt("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex p-4 bg-gray-700">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask Codex..."
        rows="1"
        className="flex-1 p-2 bg-transparent border-none outline-none text-white resize-none"
      />
      <button type="submit" className="ml-4">
        <img src={send} alt="send" className="w-7 h-7" />
      </button>
    </form>
  );
};

export default ChatForm;
