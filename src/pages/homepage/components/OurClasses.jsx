import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function OurClasses() {
  const [openClass, setOpenClass] = useState(1);

  const classes = [
    { id: 0, title: "Mini Infant Class", ageRange: "1 | 2-3 YEARS" },
    { id: 1, title: "Junior Class", ageRange: "2 | 3-4 YEARS" },
    { id: 2, title: "Toddler Class", ageRange: "3 | 4-5 YEARS" },
    { id: 3, title: "Beginner Class", ageRange: "4 | 5-6 YEARS" },
    { id: 4, title: "Adult Class", ageRange: "5 | 6-12 YEARS" },
  ];

  const toggleClass = (id) => {
    setOpenClass(openClass === id ? -1 : id);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">OUR CLASSES</h2>
        <div className="flex items-center justify-center">
          <div className="h-px bg-blue-200 w-16"></div>
          <div className="mx-2 h-4 w-4 rounded-full bg-blue-500"></div>
          <div className="h-px bg-blue-200 w-16"></div>
        </div>
      </div>

      {/* Class List */}
      <div className="space-y-4">
        {classes.map((cls) => (
          <div key={cls.id} className="w-full">
            {/* Class Header */}
            <div
              className="flex items-center justify-between py-3 px-4 cursor-pointer bg-gray-50 rounded-lg hover:bg-gray-100"
              onClick={() => toggleClass(cls.id)}
            >
              <div className="flex items-center justify-between">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2v1z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span className="text-blue-600 font-medium">
                  {cls.ageRange}
                </span>
              </div>
              <span className="text-blue-600 font-medium mr-4">
                {cls.title}
              </span>
              <div className="flex items-center">
                <div className="border border-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-blue-500">
                  {openClass === cls.id ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </div>
              </div>
            </div>

            {/* Class Content (only shown when open) */}
            {openClass === cls.id && (
              <div className="mt-2 border-t border-blue-200">
                <div className="flex flex-col md:flex-row">
                  <div className="p-6 w-full md:w-1/2">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      SWIM CLASESS FOR{" "}
                      {cls.title.toUpperCase().replace(" CLASS", "")}
                    </h3>
                    <p className="text-gray-600 mb-2">Age 3-4 Years</p>
                    <p className="text-gray-600 mb-4">Class Time : 11am-12pm</p>

                    <p className="text-gray-500 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud.
                    </p>

                    <p className="text-gray-600 mb-6">Total! Class - 20</p>

                    <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors">
                      Register Now
                    </button>
                  </div>
                  <div className="w-full md:w-1/2">
                    <img
                      src="https://d2h8hramu3xqoh.cloudfront.net/blog/wp-content/uploads/2018/07/Swimming-Benefits-Children-MentallyEmotionallyand-Physically.webp"
                      alt="Child swimming with goggles"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
