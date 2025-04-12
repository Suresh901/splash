import React from "react";

export default function SwimClassCards() {
  const classes = [
    {
      id: 1,
      title: "SWIM CLASS FOR MINI",
      instructor: "Instructor Adom Jonson",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-12 h-12 fill-blue-300"
        >
          <path d="M12 4a4 4 0 100 8 4 4 0 000-8z" />
          <path d="M6 14c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v1H6v-1z" />
          <path d="M17.2 15c-.4 0-.8.1-1.2.2-1.2.4-2.6.4-3.9 0-1.2-.4-2.7-.4-3.9 0-.4.1-.8.2-1.2.2-1.2 0-2.4-.6-3-1.7l-.4-.8c-.2-.3-.1-.7.2-.9.3-.2.7-.1.9.2l.4.8c.3.6 1 1 1.8 1 .2 0 .5-.1.7-.1 1.5-.5 3.3-.5 4.8 0 1.5.5 3.3.5 4.8 0 .2-.1.5-.1.7-.1.8 0 1.5-.4 1.8-1l.4-.8c.2-.3.6-.4.9-.2.3.2.4.6.2.9l-.4.8c-.6 1.1-1.8 1.7-3 1.7z" />
        </svg>
      ),
      borderColor: "border-blue-500",
      buttonColor: "bg-blue-600",
    },
    {
      id: 2,
      title: "SWIM CLASS FOR TODDLER",
      instructor: "Instructor Adom Jonson",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-12 h-12 stroke-blue-400 fill-none"
        >
          <path
            strokeWidth="1.5"
            d="M18 4c-1.5 0-3 1.5-3 3.5V12h-6V7.5C9 5.5 7.5 4 6 4S3 5.5 3 7.5V15h18V7.5C21 5.5 19.5 4 18 4z"
          />
          <path
            strokeWidth="1.5"
            d="M14 12v3m-4-3v3m-5 2h14m-5 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      borderColor: "border-blue-700",
      buttonColor: "bg-blue-600",
    },
    {
      id: 3,
      title: "SWIM CLASS FOR ADULT",
      instructor: "Instructor Adom Jonson",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-12 h-12 stroke-red-300 fill-none"
        >
          <path
            strokeWidth="1.5"
            d="M4 19h16M7 14c1-1 2-1 3 0s2 1 3 0 2-1 3 0 2 1 3 0"
          />
          <path strokeWidth="1.5" d="M12 13l4-4M9 6l1.5 1.5L12 9" />
          <path
            strokeWidth="1.5"
            d="M17 6c0 .5-.5 1-1 1s-1-.5-1-1 .5-1 1-1 1 .5 1 1z"
          />
        </svg>
      ),
      borderColor: "border-red-500",
      buttonColor: "bg-blue-600",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 p-4 mt-20 mb-20">
      {classes.map((classInfo) => (
        <div
          key={classInfo.id}
          className={`border-2 ${classInfo.borderColor} rounded-lg w-64 flex flex-col items-center px-10 py-5`}
        >
          <div className="bg-gray-100 rounded-full p-6 mb-8">
            {classInfo.icon}
          </div>

          <h2 className="text-lg font-bold text-center text-blue-800 mb-2">
            {classInfo.title}
          </h2>

          <p className="text-sm text-blue-600 mb-6">{classInfo.instructor}</p>

          <button
            className={`${classInfo.buttonColor} text-white px-6 py-2 rounded hover:opacity-90 transition-opacity`}
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  );
}
