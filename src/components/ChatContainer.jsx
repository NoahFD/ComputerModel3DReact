import ChatMessage from "./ChatMessage";

const ChatContainer = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 w-80 h-full">
      {messages.map((msg) => (
        <ChatMessage key={msg.id} {...msg} />
      ))}
    </div>
  );
};

export default ChatContainer;
