import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function OurClasses() {
  const [openClass, setOpenClass] = useState(1);

  const classes = [
    {
      id: 0,
      title: "Mini Infant Class",
      ageRange: "1 | (2-3 YEARS)",
      description: "Fun and gentle water activities for young toddlers.",
      ageLabel: "Age: 2-3 Years",
      time: "10am - 11am",
      totalClasses: 15,
      image: "https://i.ytimg.com/vi/yFkxELKC2XE/maxresdefault.jpg",
    },
    {
      id: 1,
      title: "Junior Class",
      ageRange: "2 | (3-4 YEARS)",
      description: "Introduction to water safety and basic swim skills.",
      ageLabel: "Age: 3-4 Years",
      time: "11am - 12pm",
      totalClasses: 20,
      image:
        "https://res-1.cloudinary.com/gll/image/upload/c_fit,f_auto,h_657,w_657/v1688999970/dnfcbrnbztpq9vbi85c3.jpg",
    },
    {
      id: 2,
      title: "Toddler Class",
      ageRange: "3 | (4-5 YEARS)",
      description: "Focusing on floating and beginner strokes.",
      ageLabel: "Age: 4-5 Years",
      time: "12pm - 1pm",
      totalClasses: 18,
      image:
        "https://compote.slate.com/images/83666164-00ca-424c-95ea-105f4ab8d6df.jpg",
    },
    {
      id: 3,
      title: "Beginner Class",
      ageRange: "4 | (5-6 YEARS)",
      description: "Building swim confidence with new techniques.",
      ageLabel: "Age: 5-6 Years",
      time: "1pm - 2pm",
      totalClasses: 22,
      image:
        "https://reddiset.com/cdn/shop/articles/young_man_swimming_the_butterfly_in_a_pool.webp?v=1687179581",
    },
    {
      id: 4,
      title: "Adult Class",
      ageRange: "5 | (6-12 YEARS)",
      description: "For older kids and adults learning to swim.",
      ageLabel: "Age: 6-12 Years",
      time: "2pm - 3pm",
      totalClasses: 25,
      image:
        "https://d1s9j44aio5gjs.cloudfront.net/2016/06/4_adult_swimming_aids_to_help_you_learn_to_swim.jpg",
    },
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
                      SWIM CLASSES FOR{" "}
                      {cls.title.toUpperCase().replace(" CLASS", "")}
                    </h3>
                    <p className="text-gray-600 mb-2">{cls.ageLabel}</p>
                    <p className="text-gray-600 mb-4">Class Time: {cls.time}</p>

                    <p className="text-gray-500 mb-4">{cls.description}</p>

                    <p className="text-gray-600 mb-6">
                      Total! Class - {cls.totalClasses}
                    </p>

                    <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors">
                      Register Now
                    </button>
                  </div>
                  <div className="w-full md:w-1/2">
                    <img
                      src={cls.image}
                      alt={cls.title}
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
