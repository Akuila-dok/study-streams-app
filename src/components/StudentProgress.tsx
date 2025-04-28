import React from "react";

const courses = [
  { name: "Mathematics", progress: 80 },
  { name: "Science", progress: 65 },
  { name: "English", progress: 90 },
  { name: "History", progress: 50 },
  { name: "Computer Science", progress: 75 },
];

const StudentProgress = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold text-gray-800">Student Progress</h1>
      <div className="mt-4 flex flex-col gap-4">
        {courses.map((course, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md">
            <div className="flex justify-between items-center">
              <h2 className="font-medium text-gray-700">{course.name}</h2>
              <span className="text-sm text-gray-500">{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-300 h-2 rounded-md mt-2">
              <div
                className="bg-blue-500 h-2 rounded-md"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentProgress;
