import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-12 flex items-center justify-between">
        
        {/* Left Section */}
        <div className="flex-1 pr-8">
          <h1 className="text-5xl font-extrabold leading-tight">
            Smart <span className="text-indigo-600">Productivity</span> Hub
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Your AI-powered assistant for seamless task management, 
            smart document summarization, and more. 
            Boost efficiency and stay organized with ease.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-6">
            <button className="px-8 py-3 rounded-xl bg-indigo-600 text-white text-lg font-medium shadow-md hover:bg-indigo-700 transition">
              Login
            </button>
            <button className="px-8 py-3 rounded-xl border border-gray-300 text-lg font-medium shadow-sm hover:bg-gray-100 transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center">
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white p-10 rounded-2xl shadow-2xl text-2xl font-semibold transform rotate-6 transition-transform duration-500 hover:rotate-0">
            AI Productivity
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;