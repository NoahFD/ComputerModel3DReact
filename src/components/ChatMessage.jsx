import bot from "@/assets/bot.svg";
import user from "@/assets/user.svg";

const ChatMessage = ({ isAi, text }) => {
  return (
    <div
      className={`flex font-retro text-sm p-4 rounded-lg ${isAi ? "bg-gray-700  text-terminalGreen" : "bg-gray-600 text-terminalGreenDark"} `}
    >
      <div className="flex-shrink-0">
        <img
          src={isAi ? bot : user}
          alt={isAi ? "bot" : "user"}
          className="w-3 h-3"
        />
      </div>
      <div className="ml-2 text-left">{text}</div>
    </div>
  );
};

export default ChatMessage;
