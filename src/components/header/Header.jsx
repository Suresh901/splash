import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-[30px] md:px-[60px] bg-[#0148bc] text-white text-[12px] md:text-[15px] ">
      <div className="md:flex items-center md:space-x-4">
        <div className="flex items-center space-x-2">
          <MdEmail />
          <h2>contact@example.com</h2>
        </div>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4 p-2">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaPinterest />
      </div>
    </div>
  );
};

export default Header;
