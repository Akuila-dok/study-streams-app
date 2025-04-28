"use client"
import React from 'react'
import { Megaphone } from 'lucide-react'

const announcements = [
  { title: "Midterm Exams Next Week", date: "April 29, 2025", content: "Please prepare thoroughly for the upcoming midterms. Time tables will be shared soon." },
  { title: "New Course Materials Uploaded", date: "April 25, 2025", content: "Check the resources section for updated Biology and Chemistry materials." },
  { title: "Holiday Break Reminder", date: "April 20, 2025", content: "School closes for a short break from May 1st to May 7th." },
]

const AnnouncementsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-6 font-sans">
      {/* Header */}
      <div className="flex flex-col items-center mb-10">
        <Megaphone className="w-16 h-16 text-purple-600 mb-4" />
        <h1 className="text-4xl font-bold text-purple-800">Announcements</h1>
        <p className="text-gray-600 mt-2">Stay updated with the latest news and events.</p>
      </div>

      {/* Announcements List */}
      <div className="space-y-6 max-w-3xl mx-auto">
        {announcements.map((announcement, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-purple-800">{announcement.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{announcement.date}</p>
            <p className="text-gray-700">{announcement.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnnouncementsPage
