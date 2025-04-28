"use client"
import React, { useState } from 'react'
import { Bell } from 'lucide-react'

const StudentPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [showCourseContent, setShowCourseContent] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState('')
  const [code, setCode] = useState('')

  const enrolledCourses = ['Mathematics', 'English', 'Biology', 'Chemistry', 'Agriculture']
  const availableCourses = ['Kiswahili', 'Physics', 'CRE / IRE', 'Geography', 'History', 'Home Science']

  const lessons = [
    'Introduction',
    'Chapter 1: Basics',
    'Chapter 2: Intermediate Concepts',
    'Chapter 3: Advanced Topics',
    'Practice Tests',
    'Assignments',
    'Final Exam'
  ]

  const handleEnrollClick = (course: string) => {
    setSelectedCourse(course)
    setShowModal(true)
  }

  const handleCodeSubmit = () => {
    if (code === '1234') {
      alert(`Enrollment to ${selectedCourse} successful!`)
      setShowModal(false)
      setCode('')
    } else {
      alert('Invalid code. Please try again.')
    }
  }

  const handleViewClick = (course: string) => {
    setSelectedCourse(course)
    setShowCourseContent(true)
  }

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      
      {/* Main content */}
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">Welcome, Mr Ishmael 👋</h1>
          <div className="flex flex-wrap gap-4 items-center">
            <input
              type="text"
              placeholder="Search courses..."
              className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            <span className="text-white font-semibold bg-blue-700 px-3 py-1 rounded-full">
              🎯 My Learning
            </span>
            <Bell className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer" />
          </div>
        </header>

        {/* Enrolled Courses Section */}
        <section className="mb-10 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">📘 Enrolled Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrolledCourses.map(course => (
              <div key={course} className="bg-blue-50 shadow-inner rounded-xl p-6 flex justify-between items-center hover:shadow-md transition">
                <div>
                  <h3 className="font-bold text-xl text-gray-800">{course}</h3>
                  <p className="text-sm text-gray-500 mt-1">Click to view course content</p>
                </div>
                <button 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  onClick={() => handleViewClick(course)}
                >
                  View
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Available Courses Section */}
        <section className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">🆕 Enroll to New Course</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {availableCourses.map(course => (
              <div key={course} className="bg-green-50 shadow-inner rounded-xl p-6 flex justify-between items-center">
                <span className="font-semibold text-lg text-gray-800">{course}</span>
                <button 
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  onClick={() => handleEnrollClick(course)}
                >
                  Enroll
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Enroll Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-lg w-96 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              🔐 Enter Code for <span className="text-blue-700">{selectedCourse}</span>
            </h2>
            <input 
              type="text" 
              placeholder="Enter code sent to your email"
              className="w-full border border-gray-300 rounded px-4 py-3 mb-6"
              value={code}
              onChange={e => setCode(e.target.value)}
            />
            <div className="flex justify-end space-x-2">
              <button 
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button 
                onClick={handleCodeSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Course Content Modal */}
      {showCourseContent && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-xl flex flex-col">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">{selectedCourse} - Lessons</h2>
              <button 
                onClick={() => setShowCourseContent(false)}
                className="text-gray-600 hover:text-red-600"
              >
                ✖
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <ul className="space-y-4">
                {lessons.map((lesson, index) => (
                  <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition">
                    {lesson}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StudentPage
