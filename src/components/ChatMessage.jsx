import bot from "@/assets/bot.svg";
import user from "@/assets/user.svg";

const ChatMessage = ({ isAi, text }) => {
  return (
    <div
      className={`flex ${isAi ? "bg-gray-700" : "bg-gray-600"} p-4 rounded-lg`}
    >
      <div className="flex-shrink-0">
        <img
          src={isAi ? bot : user}
          alt={isAi ? "bot" : "user"}
          className="w-9 h-9"
        />
      </div>
      <div className="ml-4 text-gray-300">{text}</div>
    </div>
  );
};

export default ChatMessage;
