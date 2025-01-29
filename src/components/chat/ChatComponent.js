import React from 'react';
import Image from 'next/image';

const ChatInterface = () => {
  const messages = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu",
      sender: "user",
      avatar: "/future.jpeg"
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu",
      sender: "other",
      avatar: "/future.jpeg"
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu",
      sender: "other",
      avatar: "/future.jpeg"
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu",
      sender: "user",
      avatar: "/future.jpeg"
    }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:block w-80 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Messages</h2>
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-3">
            <Image
              src="/future.jpeg"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h3 className="font-medium">Jackson and Family International</h3>
              <p className="text-sm text-gray-500">Port Harcourt, Rumuola</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white p-4 border-b border-gray-200 flex items-center space-x-3">
          <Image
            src="/api/placeholder/40/40"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h3 className="font-medium">Jackson and Family International</h3>
            <p className="text-sm text-gray-500">Port Harcourt, Rumuola</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-2 ${
                message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <Image
                src={message.avatar}
                alt="Avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
              <div
                className={`max-w-[70%] p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100'
                }`}
              >
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white p-4 border-t border-gray-200">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Send Message"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;