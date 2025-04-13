import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Welcome from "./components/Welcome";
import KnowUs from "./components/KnowUs";
import Counter from "../../components/counter/Counter";
import ContactCard from "../../components/contact/Contact";

const About = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Welcome />
      <KnowUs />
      <Counter />
      <ContactCard />
    </div>
  );
};

export default About;
