import React from "react";
import { Home, Phone, Mail } from "lucide-react";
const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4 my-10">
      <div className="bg-blue-600 text-white p-8 flex flex-col items-center text-center">
        <Home size={32} className="mb-2" />
        <h3 className="uppercase text-sm font-bold mb-2">ADDRESS</h3>
        <p className="text-sm">PepsiCola, kathmandu </p>
        {/* <p className="text-sm">Midtown, New York</p> */}
      </div>

      <div className="bg-blue-400 text-white p-8 flex flex-col items-center text-center">
        <Phone size={32} className="mb-2" />
        <h3 className="uppercase text-sm font-bold mb-2">PHONE NUMBER</h3>
        <p className="text-sm">0123456789</p>
      </div>

      <div className="bg-red-500 text-white p-8 flex flex-col items-center text-center">
        <Mail size={32} className="mb-2" />
        <h3 className="uppercase text-sm font-bold mb-2">EMAIL</h3>
        <p className="text-sm">demo@example.com</p>
        {/* <p className="text-sm">demo@example.com</p> */}
      </div>
    </div>
  );
};

export default Contact;
