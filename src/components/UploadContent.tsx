"use client"

import React, { useState } from "react";

const UploadContent = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ title, description, file });
    // Implement file upload logic
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800">Upload Content</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          placeholder="Content Title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          className="border border-blue-300 focus:ring-2 focus:ring-blue-400 p-2 rounded-md outline-none"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
          className="border border-blue-300 focus:ring-2 focus:ring-blue-400 p-2 rounded-md outline-none"
          required
        ></textarea>
        <input
          type="file"
          accept=".pdf,.doc,.docx,video/*"
          onChange={handleFileChange}
          className="border border-blue-300 focus:ring-2 focus:ring-blue-400 p-2 rounded-md outline-none cursor-pointer"
          required
        />
        {file && (
          <p className="text-sm text-blue-700 bg-blue-100 p-2 rounded-md">
            Selected file: {file.name}
          </p>
        )}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadContent;
