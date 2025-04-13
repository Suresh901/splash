import React from "react";

const AboutSection = () => {
  return (
    <div className="my-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">ABOUT US</h2>
        <div className="flex items-center justify-center">
          <div className="h-px bg-blue-200 w-16"></div>
          <div className="mx-2 h-4 w-4 rounded-full bg-blue-500"></div>
          <div className="h-px bg-blue-200 w-16"></div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-gray-600 mb-4 mx-auto max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et daenim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. voluptate velit esse cillum dolore eu fugiat swimmer ground
        </p>
      </div>

      <div className="flex items-center justify-center mt-10">
        <img
          src="https://www.hrjohnsonindia.com/assets/images/blog/5-Innovative-Ideas-to-Design-Your-Dream-Swimming-Pool-thumb-og.jpg"
          alt=""
        />
      </div>

      <div className="text-center my-10">
        <p className="text-gray-600 mb-4 mx-auto max-w-4xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et daenim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. voluptate velit esse cillum dolore eu fugiat swimmer ground
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
