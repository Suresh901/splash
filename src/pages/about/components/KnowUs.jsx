import React from "react";
import ContactForm from "../../../components/contactForm/ContactForm";

export default function KnowUs() {
  return (
    <div className="max-w-6xl mx-auto bg-white p-4 rounded-lg ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1 md:pr-6 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-medium mb-4">Ask us to know all info</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="col-span-1 p-4 shadow-md">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
