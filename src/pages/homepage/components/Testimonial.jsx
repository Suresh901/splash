import React from "react";

export default function Testimonial() {
  return (
    <div className="py-16 px-4 bg-gray-50 relative">
      {/* Background pattern elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-gray-300"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-gray-300"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 border-t-2 border-r-2 border-gray-300"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border-b-2 border-l-2 border-gray-300"></div>
        {/* Zigzag patterns */}
        <div className="absolute top-0 left-1/3 text-gray-200 text-6xl">
          &#8767;
        </div>
        <div className="absolute bottom-0 right-1/3 text-gray-200 text-6xl">
          &#8767;
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-8">
          What Client Say?
        </h2>

        {/* Testimonial */}
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">&ldquo;</div>
          <p className="text-gray-600 mb-4 mx-auto max-w-3xl">
            I used to be nervous around water, but the instructors at Splash
            Swimming pool made me feel so comfortable from day one. They explain
            things clearly and are really encouraging. Now I can swim with
            confidence, and I actually look forward to every class! — Riya
            Shrestha
          </p>
          <div className="text-gray-400 text-6xl">&rdquo;</div>
        </div>
      </div>
    </div>
  );
}
