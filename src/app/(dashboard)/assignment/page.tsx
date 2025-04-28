"use client"
import React, { useState } from 'react'
import { FileText, Clock, CheckCircle } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

interface AssignmentsPageProps {
  courseName: string
  instructorName: string
}

const AssignmentsPage: React.FC<AssignmentsPageProps> = ({ courseName, instructorName }) => {
  const [selectedAssignment, setSelectedAssignment] = useState<string | null>(null)
  const assignments = Array.from({ length: 5 }, (_, i) => `Assignment ${i + 1}`)
  const enrolledCourses = ['Mathematics', 'English', 'Biology', 'Chemistry', 'Agriculture']
  const progress = 60

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6 font-sans">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border">
        <div>
          <h1 className="text-4xl font-bold text-blue-800">{courseName} - Assignments</h1>
          <p className="text-gray-600 text-md mt-2">
            📚 Instructor: <span className="font-semibold text-gray-800">{instructorName}</span>
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

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Assignments Area */}
        <div className="lg:col-span-2 space-y-6">
          {selectedAssignment && (
            <div className="bg-white rounded-xl shadow-md p-6 border space-y-4">
              <h2 className="text-2xl font-bold text-blue-800">{selectedAssignment}</h2>
              <p className="text-gray-700">
                This is the description for {selectedAssignment}. You can upload your work, add comments, or check submission deadlines here.
              </p>
              <div className="p-4 border rounded-lg bg-gray-50">
                📎 Upload Area (integrate file upload component here)
              </div>
            </div>
          )}

          {/* Assignments List */}
          <div className="bg-white rounded-xl shadow-md p-6 border">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📝 Your Assignments</h2>
            <ul className="space-y-3">
              {assignments.map((assignment, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center px-4 py-3 rounded-md bg-blue-50 hover:bg-blue-100 transition cursor-pointer"
                  onClick={() => setSelectedAssignment(assignment)}
                >
                  <span className="text-blue-800 font-medium">{assignment}</span>
                  <CheckCircle className="text-green-600 w-5 h-5" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="bg-white rounded-xl shadow-md p-6 border h-fit">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📚 Other Courses</h2>
          <ul className="space-y-3">
            {enrolledCourses.map((course, index) => (
              <li key={index}>
                <button
                  className="w-full text-left px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-blue-700 font-medium transition"
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

export default AssignmentsPage
