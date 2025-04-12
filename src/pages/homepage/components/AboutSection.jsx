import React from "react";
import { Play } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="flex flex-col md:flex-row w-full bg-white mt-10 mb-10">
      {/* Left side with image */}
      <div className="relative w-full md:w-1/2 h-96 md:h-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-100/20 z-10"></div>
        <img
          src="https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619.jpeg"
          alt="Baby swimming in pool with instructor"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side with content */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center text-center">
        <div className="max-w-md">
          <p className="text-blue-600 text-lg font-medium mb-2">About us</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
            Welcome To Splash Swimming Pool
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            Book A Appointment Now
          </h2>

          <p className="text-gray-500 text-sm mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </p>

          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
