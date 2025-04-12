import React from "react";
import Slider from "react-slick";

// Note: In a real project, you would need to import the CSS:
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function InstructorSlider() {
  const instructors = [
    {
      id: 1,
      name: "Mohosin Khan",
      title: "SWIM INSTRUCTOR",
      image:
        "https://www.uaepersonaltrainers.com/wp-content/uploads/2021/06/Swimming-Instructor-In-Abu-Dhabi-Lisle.jpg",
      color: "bg-blue-400",
    },
    {
      id: 2,
      name: "Mohosin Khan",
      title: "SWIM INSTRUCTOR",
      image:
        "https://www.uaepersonaltrainers.com/wp-content/uploads/2021/06/Swimming-Instructor-In-Abu-Dhabi-Lisle.jpg",
      color: "bg-blue-600",
    },
    {
      id: 3,
      name: "Mohosin Khan",
      title: "SWIM INSTRUCTOR",
      image:
        "https://www.uaepersonaltrainers.com/wp-content/uploads/2021/06/Swimming-Instructor-In-Abu-Dhabi-Lisle.jpg",
      color: "bg-red-500",
    },
    // Add more instructors as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            OUR BEST INSTRUCTOR
          </h2>
          <div className="flex items-center justify-center">
            <div className="h-px bg-blue-200 w-16"></div>
            <div className="mx-2 h-4 w-4 rounded-full bg-blue-500"></div>
            <div className="h-px bg-blue-200 w-16"></div>
          </div>
        </div>

        {/* Slider */}
        <div className="relative px-8">
          <Slider {...settings}>
            {instructors.map((instructor) => (
              <div key={instructor.id} className="px-2">
                <div className="bg-white shadow-md rounded-md overflow-hidden">
                  <div className="h-80 overflow-hidden">
                    <img
                      src={instructor.image}
                      alt={`Instructor ${instructor.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className={`${instructor.color} p-6 text-center text-white`}
                  >
                    <h3 className="text-lg font-medium mb-1">
                      {instructor.title}
                    </h3>
                    <p className="text-white">{instructor.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

// Custom arrow components
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-blue-500 bg-white rounded-full shadow-md focus:outline-none"
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-blue-500 bg-white rounded-full shadow-md focus:outline-none"
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
}
