import { useState } from "react";
import ChatContainer from "@/components/ChatContainer.jsx";
import ChatForm from "@/components/ChatForm";
import api from "@/util/api";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = async (prompt) => {
    const userMessage = {
      id: generateUniqueId(),
      text: prompt,
      isAi: false,
    };
    setMessages([...messages, userMessage]);

    const botMessage = {
      id: generateUniqueId(),
      text: "...",
      isAi: true,
    };
    setMessages([...messages, userMessage, botMessage]);

    try {
      const response = await api.post("/", { prompt });
      const { data } = response;

      const newBotMessage = {
        ...botMessage,
        text: data.bot.trim(),
      };
      setMessages((prev) =>
        prev.map((msg) => (msg.id === botMessage.id ? newBotMessage : msg)),
      );
    } catch (error) {
      const errorMessage = {
        ...botMessage,
        text: "Something went wrong",
      };
      setMessages((prev) =>
        prev.map((msg) => (msg.id === botMessage.id ? errorMessage : msg)),
      );
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-800">
      <ChatContainer messages={messages} />
      <ChatForm onSend={handleSend} />
    </div>
  );
};

function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);
  return `id-${timestamp}-${hexadecimalString}`;
}

export default ChatBot;
