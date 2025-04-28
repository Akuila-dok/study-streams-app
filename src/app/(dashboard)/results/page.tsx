"use client"
import React from 'react'
import { BarChart2, Trophy } from 'lucide-react'

const results = [
  { subject: 'Mathematics', grade: 'A', score: 92 },
  { subject: 'English', grade: 'B+', score: 85 },
  { subject: 'Biology', grade: 'A-', score: 88 },
  { subject: 'Chemistry', grade: 'B', score: 80 },
  { subject: 'History', grade: 'A', score: 90 },
]

const ResultsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6 font-sans">
      {/* Header */}
      <div className="flex flex-col items-center mb-10">
        <Trophy className="w-16 h-16 text-yellow-500 mb-4" />
        <h1 className="text-4xl font-bold text-green-800">Academic Results</h1>
        <p className="text-gray-600 mt-2">Here are your latest scores and grades!</p>
      </div>

      {/* Results Table */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto border">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="border-b text-gray-700 uppercase text-sm tracking-wider">
              <th className="py-3">Subject</th>
              <th className="py-3">Grade</th>
              <th className="py-3">Score (%)</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition">
                <td className="py-4">{result.subject}</td>
                <td className="py-4 font-semibold">{result.grade}</td>
                <td className="py-4">{result.score}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ResultsPage
