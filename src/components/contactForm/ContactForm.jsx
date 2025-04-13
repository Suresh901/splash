import React from "react";

const ContactForm = () => {
  return (
    <div className=" p-8 shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700">Contact Us</h1>
        <div className="flex items-center justify-center mt-2">
          <div className="h-px bg-gray-300 w-24"></div>
          <div className="mx-2 text-blue-700 text-2xl">•</div>
          <div className="h-px bg-gray-300 w-24"></div>
        </div>
      </div>
      <form className="space-y-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="p-2 border border-gray-300 rounded w-full bg-gray-50"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-2 border border-gray-300 rounded w-full bg-gray-50"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="p-2 border border-gray-300 rounded w-full bg-gray-50"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="p-2 border border-gray-300 rounded w-full bg-gray-50"
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          className="p-2 border border-gray-300 rounded w-full bg-gray-50"
        />

        <textarea
          placeholder="Message"
          className="p-2 border border-gray-300 rounded w-full h-32 bg-gray-50"
        ></textarea>

        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-medium py-2 px-8 rounded hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
