import React, { useState } from "react";
import data from "../data/messagesData.json";

interface Message {
  id: number;
  text: string;
  timestamp: string;
  sender: string;
}

interface Conversation {
  id: number;
  user: string;
  avatar: string;
  messages: Message[];
}

const Messages: React.FC = () => {
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);

  const [newMessage, setNewMessage] = useState<string>("");

  const conversations: Conversation[] = data;

  const handleConversationClick = (conversation: Conversation) => {
    setSelectedConversation(conversation);
  };

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedConversation && newMessage.trim() !== "") {
      const message: Message = {
        id: selectedConversation.messages.length + 1,
        text: newMessage,
        timestamp: new Date().toISOString(),
        sender: "You",
      };
      const updatedMessages = [...selectedConversation.messages, message];
      const updatedConversation = {
        ...selectedConversation,
        messages: updatedMessages,
      };
      setSelectedConversation(updatedConversation);
      setNewMessage("");
    }
  };

  return (
    <div className="flex h-full">
      <div className="w-1/3 border-r-[1px] border-gray-500">
        <h2 className="text-xl font-bold p-4 border-gray-500">
          Messages
        </h2>
        <ul>
          {conversations.map((conversation) => (
            <li
              key={conversation.id}
              className="cursor-pointer px-4 py-2 hover:bg-slate-400 hover:bg-opacity-10 hover:transition border-t-[1px] border-gray-500"
              onClick={() => handleConversationClick(conversation)}
            >
              <img
                src={conversation.avatar}
                alt={conversation.user}
                className="w-10 h-10 rounded-full mr-2"
              />
              <span className="text-lg font-semibold">{conversation.user}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 p-4 h-full">
        {selectedConversation ? (
          <div className="h-screen flex flex-col">
            <h2 className="text-xl font-bold mb-4">
              {selectedConversation.user}
            </h2>
            <div className="overflow-y-auto flex-grow">
              <ul className="scrollable-container">
                {selectedConversation.messages.map((message) => (
                  <li key={message.id} className="mb-4">
                    <p
                      className={`text-lg ${
                        message.sender === "You" ? "text-right" : ""
                      }`}
                    >
                      {message.text}
                    </p>
                    <p
                      className={`text-gray-600 text-sm ${
                        message.sender === "You" ? "text-right" : ""
                      }`}
                    >
                      {new Date(message.timestamp).toLocaleString()}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <form
              onSubmit={handleSendMessage}
              className="flex items-center mb-8"
            >
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="w-full border border-gray-300 p-2 outline-none rounded-full mr-2"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 px-4 rounded-full"
              >
                Send
              </button>
            </form>
          </div>
        ) : (
          <p className="text-lg text-gray-600">
            Select a conversation to view messages.
          </p>
        )}
      </div>
    </div>
  );
};

export default Messages;
