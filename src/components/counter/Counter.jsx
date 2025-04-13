const stats = [
  {
    id: 1,
    number: "2,400",
    title: "Happy Clients",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    number: "28",
    title: "Experience",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    number: "90",
    title: "Success",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    number: "560",
    title: "Awards",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
];

const Counter = () => {
  return (
    <div className="py-16 bg-gray-900 bg-opacity-80 relative my-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src=""
          alt="Swimming pool background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-1">
        <div className="flex flex-wrap justify-center sm:justify-between">
          {stats.map((stat) => (
            <div key={stat.id} className="px-8 py-4 text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-500">{stat.icon}</div>
              </div>
              <div className="text-white text-2xl font-bold mb-1">
                {stat.number}
              </div>
              <div className="text-white text-sm">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;
