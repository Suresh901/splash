import React from "react";

export default function SwimmingSchool() {
  const classCards = [
    {
      id: 1,
      date: 21,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7445lbBHSh2eeXN0nejYiFYwegHddIznM8g&s",
      title: "Swimming Is The Best Physical Activity",
    },
    {
      id: 2,
      date: 24,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4rg00E3hxAHXHw0Cex0v8F-hlCwGMxDH7OA&s",
      title: "Swimming Is The Best Physical Activity",
    },
    {
      id: 3,
      date: 26,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfdKKXzbXUb5seueMzttlFNFmMaXsE5P0kw&s",
      title: "Swimming Is The Best Physical Activity",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Swimming Classes Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {classCards.map((card) => (
          <div key={card.id} className="bg-white shadow-md">
            <div className="relative">
              <img
                src={card.image}
                alt="Swimming child"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-0 left-0 flex flex-col items-center bg-[#f6f6f6] p-2 w-12">
                <span className="text-blue-600 text-xs font-semibold">Feb</span>
                <span className="text-blue-600 text-2xl font-bold">
                  {card.date}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labio riorbi magna aliquap.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 text-sm">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
