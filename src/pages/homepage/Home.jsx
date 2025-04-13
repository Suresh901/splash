import React from "react";
import HeroSection from "./components/HeroSection";
import SwimClassCards from "./components/SwimClassCards";
import AboutSection from "./components/AboutSection";
import OurClasses from "./components/OurClasses";
import InstructorSlider from "./components/InstructorSlider";
import Testimonial from "./components/Testimonial";
import GallerySection from "./components/Masonry";
import SwimmingSchool from "./components/SwimmingSchool";
import PricingPlans from "./components/PricingPlan";
import Counter from "../../components/counter/Counter";
import ContactCard from "../../components/contact/Contact";

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
      <ContactCard />
    </div>
  );
};

export default Home;
