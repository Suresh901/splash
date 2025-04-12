import React from "react";
import HeroSection from "./components/HeroSection";
import SwimClassCards from "./components/SwimClassCards";
import AboutSection from "./components/AboutSection";
import OurClasses from "./components/OurClasses";
import InstructorSlider from "./components/InstructorSlider";
import Testimonial from "./components/Testimonial";
import GallerySection from "./components/Masonry";
import SwimmingSchool from "./components/SwimmingSchool";
import Footer from "../../components/footer/Footer";

import PricingPlans from "./components/PricingPlan";
import Counter from "./components/Counter";
import Contact from "./components/Contact";

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
      <PricingPlans />
      <Counter />
      <SwimmingSchool />
      <Contact />
    </div>
  );
};

export default Home;
