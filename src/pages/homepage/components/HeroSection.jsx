import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import banner from "../../../assets/images/banner.png";

const HeroSection = () => {
  const img = [
    {
      id: 1,
      image: banner,
    },
    {
      id: 2,
      image: banner,
    },
  ];

  const sliderRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    pauseOnHover: true,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Slider Component */}
      <Slider ref={sliderRef} {...settings}>
        {img.map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt="slider"
              className="w-full h-full hidden md:flex"
            />
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Arrows */}
      <div
        className={`flex justify-between items-center absolute top-1/2 w-full px-4 transform -translate-y-1/2 transition-opacity duration-300 
        
        }`}
      >
        <FaAngleLeft
          className="h-8 w-8 cursor-pointer bg-white rounded-full shadow-xl"
          onClick={handlePrevClick}
        />
        <FaAngleRight
          className="h-8 w-8 cursor-pointer bg-white rounded-full shadow-xl"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default HeroSection;
