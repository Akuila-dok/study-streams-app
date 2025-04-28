import React from "react";

const PendingAssignments = () => {
  // Sample pending assignments data
  const pendingAssignments = [
    {
      title: "English Essay",
      student: "Alice Johnson",
      submissionDate: "2025-03-15",
      dueDate: "2025-03-20",
    },
    {
      title: "Physics Lab Report",
      student: "Mark Wilson",
      submissionDate: "2025-03-16",
      dueDate: "2025-03-21",
    },
    {
      title: "Geography Research",
      student: "Emma Davis",
      submissionDate: "2025-03-17",
      dueDate: "2025-03-22",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800">Pending Assignments</h1>
      <div className="flex flex-col gap-4 mt-4">
        {pendingAssignments.map((assignment, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500 hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-medium text-gray-800">{assignment.title}</h2>
              <span className="text-xs text-gray-500 bg-yellow-100 px-2 py-1 rounded-md">
                Due: {assignment.dueDate}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Student:</strong> {assignment.student}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Submitted:</strong> {assignment.submissionDate}
            </p>
            <p className="text-sm text-yellow-600 font-semibold mt-2">
              Status: Pending Grading ⏳
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingAssignments;
