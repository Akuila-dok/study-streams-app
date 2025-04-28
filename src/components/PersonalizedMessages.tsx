import React from "react";

const messages = [
  { sender: "Mr. John (Math)", message: "Great job on your last quiz!", date: "2025-03-10" },
  { sender: "Ms. Lisa (History)", message: "Your project feedback is available.", date: "2025-03-08" },
];

const PersonalizedMessages = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="font-medium text-gray-800">Personalized Messages</h2>
      <div className="mt-2 flex flex-col gap-2">
        {messages.map((msg, index) => (
          <div key={index} className="bg-white p-3 rounded-md shadow-sm">
            <p className="text-sm text-gray-800">{msg.message}</p>
            <span className="text-xs text-gray-500">{msg.sender} - {msg.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalizedMessages;
