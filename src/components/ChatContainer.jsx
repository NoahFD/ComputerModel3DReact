import ChatMessage from "./ChatMessage";

const ChatContainer = ({ messages }) => {
  return (
    <div className="flex flex-col gap-4 p-4 overflow-y-auto flex-1">
      {messages.map((msg) => (
        <ChatMessage key={msg.id} {...msg} />
      ))}
    </div>
  );
};

export default ChatContainer;
