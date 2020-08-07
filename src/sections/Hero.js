import React from "react";
import { FaUser } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero">
      <div className="flex items-center pt-4 mb-4">
        <img src="/image1.jpg" alt="Profile" className="w-32 h-auto mr-4 rounded-lg shadow-lg md:mr-8 md:w-64" />
        <h1 className="m-0 md:text-6xl md:font-light">Annie Lesny</h1>
      </div>
    </section>
  );
};

export default Hero;
