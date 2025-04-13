import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import image from "../../assets/images/logo2.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 ">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 ">
        {/* Logo & About */}
        <div>
          <img src={image} alt="logo" />
          <h2 className="text-xl font-bold mb-3">Splash Swimming pool</h2>
          <p className="text-sm text-gray-400">
            Dive into excellence with our state-of-the-art swimming facilities.
            We offer fun, fitness, and training for all ages.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm text-gray-300">
            Splash Swimming pool, Pepsicola, kathmandu
          </p>
          <p className="text-sm text-gray-300 mt-1">Email: splash@gmail.com</p>
          <p className="text-sm text-gray-300 mt-1">Phone: (123) 456-7890</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Home</li>
            <li>About Us</li>
            <li>Programs</li>
            <li>Membership</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-blue-400">
            <div className="hover:text-white">
              <FaFacebookF />
            </div>
            <div className="hover:text-white">
              <FaInstagram />
            </div>
            <div className="hover:text-white">
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-2">
        © {new Date().getFullYear()} Splash Swimming Pool. All rights reserved.
        <h2>Made by Col Thinkspace</h2>
      </div>
    </footer>
  );
};

export default Footer;
