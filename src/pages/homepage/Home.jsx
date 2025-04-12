import React from "react";
import HeroSection from "./components/HeroSection";
import SwimClassCards from "./components/SwimClassCards";
import AboutSection from "./components/AboutSection";
import OurClasses from "./components/OurClasses";
import InstructorSlider from "./components/InstructorSlider";
import Testimonial from "./components/Testimonial";
import GallerySection from "./components/Masonry";
import PricingAndStats from "./components/Pricing";
import SwimmingSchool from "./components/SwimmingSchool";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SwimClassCards />
      <AboutSection />
      <OurClasses />
      <InstructorSlider />
      <Testimonial />
      <GallerySection />
      <PricingAndStats />
      <SwimmingSchool />
      <Footer />
    </div>
  );
};

export default Home;
