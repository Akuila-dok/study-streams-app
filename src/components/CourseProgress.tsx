import React from "react";

const courses = [
  { name: "Mathematics", progress: 75 },
  { name: "Physics", progress: 50 },
  { name: "History", progress: 90 },
];

const CourseProgress = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {courses.map((course, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-md">
          <h2 className="font-medium text-gray-800">{course.name}</h2>
          <div className="w-full bg-gray-300 rounded-md h-3 mt-2">
            <div
              className="bg-blue-500 h-3 rounded-md"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">{course.progress}% Complete</p>
        </div>
      ))}
    </div>
  );
};

export default CourseProgress;
