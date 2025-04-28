import React from "react";

const GradedAssignments = () => {
  // Sample graded assignments data
  const assignments = [
    {
      title: "Math Assignment 1",
      student: "John Doe",
      grade: "A",
      feedback: "Excellent work! Keep it up. 👍",
      date: "2025-03-10",
    },
    {
      title: "Science Project",
      student: "Jane Smith",
      grade: "B+",
      feedback: "Great effort! Try to elaborate more on the experiment.",
      date: "2025-03-12",
    },
    {
      title: "History Essay",
      student: "Michael Brown",
      grade: "A-",
      feedback: "Very informative essay, but minor formatting issues.",
      date: "2025-03-14",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800">Graded Assignments</h1>
      <div className="flex flex-col gap-4 mt-4">
        {assignments.map((assignment, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500 hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-medium text-gray-800">{assignment.title}</h2>
              <span className="text-xs text-gray-500 bg-green-100 px-2 py-1 rounded-md">
                {assignment.date}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Student:</strong> {assignment.student}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Grade:</strong> 
              <span className="text-green-600 font-semibold"> {assignment.grade}</span>
            </p>
            <p className="text-sm text-gray-500 italic mt-2">&quot;{assignment.feedback}&quot;</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradedAssignments;
