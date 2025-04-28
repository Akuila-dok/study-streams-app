
'use client'

import React, { useState } from "react";

const AssignmentSubmission = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="font-medium text-gray-800">Submit Assignments</h2>
      <input
        type="file"
        className="mt-2 border rounded-md p-2 w-full"
        onChange={handleFileChange}
      />
      {file && <p className="text-sm text-gray-500 mt-2">{file.name}</p>}
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
    </div>
  );
};

export default AssignmentSubmission;
