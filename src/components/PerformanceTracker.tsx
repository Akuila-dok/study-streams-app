import React from "react";

const performanceData = [
  { subject: "Mathematics", score: 92, grade: "A" },
  { subject: "Science", score: 85, grade: "B+" },
  { subject: "English", score: 78, grade: "B" },
  { subject: "History", score: 60, grade: "C" },
  { subject: "Computer Science", score: 45, grade: "D" },
];

// Function to determine badge color
const getBadge = (score: number): string => {
  if (score >= 85) return "bg-green-100 text-green-700"; // Excellent
  if (score >= 70) return "bg-yellow-100 text-yellow-700"; // Good
  return "bg-red-100 text-red-700"; // Needs Improvement
};


const PerformanceTracker = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold text-gray-800">Performance Tracker</h1>
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="text-left p-3">Subject</th>
            <th className="text-left p-3">Score</th>
            <th className="text-left p-3">Grade</th>
          </tr>
        </thead>
        <tbody>
          {performanceData.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-3">{item.subject}</td>
              <td className="p-3">{item.score}%</td>
              <td className="p-3">
                <span className={`px-3 py-1 rounded-md ${getBadge(item.score)}`}>
                  {item.grade}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PerformanceTracker;
