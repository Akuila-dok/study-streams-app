import React from "react";

const grades = [
  { subject: "Mathematics", grade: "A" },
  { subject: "Physics", grade: "B+" },
  { subject: "History", grade: "A-" },
];

const GradesOverview = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="font-medium text-gray-800">Grades Overview</h2>
      <ul className="mt-2">
        {grades.map((item, index) => (
          <li key={index} className="text-sm text-gray-700">
            {item.subject}: <span className="font-semibold">{item.grade}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GradesOverview;
