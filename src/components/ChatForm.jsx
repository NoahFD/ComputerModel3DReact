import { useEffect, useState } from "react";
import send from "@/assets/send.svg";

const ChatForm = ({ onSend }) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim() !== "") {
      onSend(prompt);
      setPrompt("");
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleSubmit(event);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <form onSubmit={handleSubmit} className="flex p-2 bg-gray-700">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask Me..."
        rows="1"
        className="flex-1 p-1 bg-transparent border-none outline-none text-terminalGreen resize-none"
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            handleSubmit(e);
          }
        }}
      />
      <button type="submit" className="ml-2">
        <img src={send} alt="send" className="w-3 h-3" />
      </button>
    </form>
  );
};

export default ChatForm;
