"use client";
import React from "react";
import { MessageCircle } from "lucide-react";

const MessagesDashboard: React.FC = () => {
  const messages = [
    { from: "Instructor John", subject: "Upcoming Exam Reminder", date: "2025-05-09" },
    { from: "Admin Office", subject: "Semester Fee Update", date: "2025-05-07" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6 font-sans">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex justify-between items-center border">
        <div>
          <h1 className="text-4xl font-bold text-blue-800">💬 Messages</h1>
          <p className="text-gray-600 mt-2">Stay updated with important announcements and messages.</p>
        </div>
      </div>

      {/* Messages List */}
      <div className="grid gap-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col border hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-800">{message.subject}</h2>
            <p className="text-gray-600 text-sm mt-1">From: {message.from}</p>
            <p className="text-gray-500 text-xs mt-1">Date: {message.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesDashboard;
