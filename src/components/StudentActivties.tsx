import React from "react";
import { FaCheckCircle, FaFileAlt, FaProjectDiagram } from "react-icons/fa";

const activities = [
  {
    type: "Assignment",
    title: "Math Homework: Algebra",
    status: "Submitted",
    date: "2025-03-10",
    icon: <FaFileAlt className="text-blue-500" />,
  },
  {
    type: "Quiz",
    title: "Science Quiz: Newton's Laws",
    status: "Completed",
    date: "2025-03-08",
    icon: <FaCheckCircle className="text-green-500" />,
  },
  {
    type: "Project",
    title: "History Presentation: World War II",
    status: "Reviewed",
    date: "2025-03-05",
    icon: <FaProjectDiagram className="text-purple-500" />,
  },
];

const StudentActivities = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold text-gray-800">Recent Activities</h1>
      <div className="mt-4 flex flex-col gap-4">
        {activities.map((activity, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md flex items-center gap-4">
            <div className="text-2xl">{activity.icon}</div>
            <div>
              <h2 className="font-medium text-gray-700">{activity.title}</h2>
              <p className="text-sm text-gray-500">{activity.status} on {activity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentActivities;
