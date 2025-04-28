"use client"
import { useState, useEffect } from "react";
import { FaUserShield, FaChalkboardTeacher, FaUserGraduate, FaUsers } from "react-icons/fa";

const LoginPage = () => {
  const [role, setRole] = useState("student");

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
      
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute w-40 h-40 bg-white opacity-20 rounded-full animate-pulse top-10 left-20"></div>
        <div className="absolute w-32 h-32 bg-white opacity-30 rounded-full animate-bounce bottom-16 right-16"></div>
        <div className="absolute w-24 h-24 bg-white opacity-25 rounded-full animate-spin-slow top-1/2 left-1/3"></div>
      </div>

      {/* Login Box */}
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Welcome Back!</h2>
        <p className="text-sm text-gray-600 text-center mb-4">Select your role and login</p>

        {/* Role Selection */}
        <div className="flex gap-3 mb-4 justify-center">
          {[
            { type: "admin", icon: FaUserShield, label: "Admin" },
            { type: "teacher", icon: FaChalkboardTeacher, label: "Teacher" },
            { type: "student", icon: FaUserGraduate, label: "Student" },
            { type: "parent", icon: FaUsers, label: "Parent" },
          ].map(({ type, icon: Icon, label }) => (
            <button key={type}
              className={`p-3 rounded-lg transition-all duration-200 flex flex-col items-center text-xs font-medium
                ${role === type ? "bg-blue-600 text-white shadow-md scale-110" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
              onClick={() => setRole(type)}>
              <Icon className="text-xl mb-1" />
              {label}
            </button>
          ))}
        </div>

        {/* Login Form */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input type="email" placeholder="Enter your email"
              className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300" required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input type="password" placeholder="Enter your password"
              className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300" required />
          </div>

          <button type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition">
            Login as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>

        {/* Extra Links */}
        <div className="text-center mt-4">
          <a href="#" className="text-blue-600 text-sm hover:underline">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
