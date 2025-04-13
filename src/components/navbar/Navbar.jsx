import { RxHamburgerMenu } from "react-icons/rx";
import image from "../../assets/images/logo2.png";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div
      className={`sticky top-0 left-0 w-full z-10 transition-transform duration-300 ease-in-out bg-white shadow-md
      `}
    >
      <div className="flex justify-between items-center py-4 px-4 md:px-12 mx-auto max-w-[1500px]">
        {/* Logo Section */}
        <div className="flex-shrink-0 w-20 md:w-44 h-16">
          <img src={image} alt="logo" className="w-full h-full" />
        </div>

        {/* Navigation Links for Large Screens */}
        <div className="hidden lg:flex gap-x-5 items-center font-medium text-gray-500">
          <ul className="flex gap-x-10">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>

            <li>Courses</li>
            <li>Instructor</li>
            <li>Register</li>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>

        {/* Hamburger Menu and Dropdowns for Small Screens */}
        <div className="lg:hidden flex items-center gap-2 sm:gap-3 md:gap-5">
          <button className={`border p-2 rounded-md bg-white flex gap-2`}>
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
