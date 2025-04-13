import { Link } from "react-router";

const HeroSection = () => {
  return (
    <div
      className="h-[304px] pt-40 px-20"
      style={{
        backgroundImage:
          "url('https://mickeybankz.com/wp-content/uploads/2022/04/pexels-guduru-ajay-bhargav-863988-1024x768.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        height: "full",
      }}
    >
      <div className="text-white flex flex-col items-center justify-center space-y-2">
        <h1 className="text-3xl font-bold ">About Us</h1>
        <div className="text-lg">
          <Link to="/" className=" hover:text-gray-300 transition">
            Home
          </Link>
          <span> &gt; About</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
