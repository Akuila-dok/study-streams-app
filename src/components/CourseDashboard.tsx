"use client"
import React, { useState } from 'react'
import { CheckCircle, Clock, BookOpen, Video } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

interface CourseDashboardProps {
  courseName: string
  instructorName: string
}

const CourseDashboard: React.FC<CourseDashboardProps> = ({ courseName, instructorName }) => {
  const enrolledCourses = ['Mathematics', 'English', 'Biology', 'Chemistry', 'Agriculture']
  const lessons = Array.from({ length: 8 }, (_, i) => `Lesson ${i + 1}`)

  const [selectedLesson, setSelectedLesson] = useState<string | null>(null)
  const [viewType, setViewType] = useState<'written' | 'video'>('written')
  const [currentCourse, setCurrentCourse] = useState<string>(courseName) // Track current course name
  const progress = 40 // You can make this dynamic later

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6 font-sans">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border">
        <div>
          <h1 className="text-4xl font-bold text-blue-800">{currentCourse}</h1> {/* Updated */}
          <p className="text-gray-600 text-md mt-2">
            👨‍🏫 Instructor: <span className="font-semibold text-gray-800">{instructorName}</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="w-64">
            <Progress value={progress} className="h-4 bg-blue-100" />
            <p className="text-sm mt-2 text-gray-600 font-medium">{progress}% Complete</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm">
            <Clock size={16} />
            In Progress
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Course Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Selected Lesson Content */}
          {selectedLesson && (
            <div className="bg-white rounded-xl shadow-md p-6 border space-y-4">
              <h2 className="text-2xl font-bold text-blue-800">{selectedLesson}</h2>

              {/* View Switch */}
              <div className="flex gap-4 mb-4">
                <button
                  onClick={() => setViewType('written')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium ${
                    viewType === 'written' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <BookOpen size={18} /> Written
                </button>
                <button
                  onClick={() => setViewType('video')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium ${
                    viewType === 'video' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <Video size={18} /> Video
                </button>
              </div>

              {/* Content Area */}
              <div className={`h-64 overflow-y-auto p-4 rounded-md border ${
                viewType === 'video' ? 'bg-black text-white' : 'bg-gray-50 text-gray-700'
              }`}>
                {viewType === 'written' ? (
                  <div className="space-y-2">
                    <p>This is the written content for {selectedLesson}. You can add paragraphs, images, notes, and explanations here.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet...</p>
                    <p>More content goes here for better understanding...</p>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    🎥 Video content for {selectedLesson} (replace this with your video player)
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Lessons Section */}
          <div className="bg-white rounded-xl shadow-md p-6 border">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📖 Lessons</h2>
            <ul className="space-y-3">
              {lessons.map((lesson, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center px-4 py-3 rounded-md bg-blue-50 hover:bg-blue-100 transition cursor-pointer"
                  onClick={() => setSelectedLesson(lesson)}
                >
                  <span className="text-blue-800 font-medium">{lesson}</span>
                  <CheckCircle className="text-green-600 w-5 h-5" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar for Other Courses */}
        <div className="bg-white rounded-xl shadow-md p-6 border h-fit">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📚 Other Enrolled Courses</h2>
          <ul className="space-y-3">
            {enrolledCourses.map((course, index) => (
              <li key={index}>
                <button
                  className="w-full text-left px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-blue-700 font-medium transition"
                  onClick={() => {
                    setCurrentCourse(course)
                    setSelectedLesson(null) // Reset lesson view when switching course
                  }}
                >
                  {course}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CourseDashboard
