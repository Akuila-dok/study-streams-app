import React from "react";

const attendanceData = [
  { subject: "Mathematics", percentage: 95 },
  { subject: "Science", percentage: 85 },
  { subject: "English", percentage: 70 },
  { subject: "History", percentage: 50 },
  { subject: "Computer Science", percentage: 30 },
];

// Function to determine badge color
const getBadge = (percentage) => {
  if (percentage >= 85) return "bg-green-100 text-green-700"; // Good Attendance
  if (percentage >= 60) return "bg-yellow-100 text-yellow-700"; // Average Attendance
  return "bg-red-100 text-red-700"; // Poor Attendance
};

const AttendanceTracker = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold text-gray-800">Attendance Tracker</h1>
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="text-left p-3">Subject</th>
            <th className="text-left p-3">Attendance</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-3">{item.subject}</td>
              <td className="p-3">
                <span className={`px-3 py-1 rounded-md ${getBadge(item.percentage)}`}>
                  {item.percentage}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTracker;
