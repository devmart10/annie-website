import React from "react";
import { FaUser } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero">
      <div className="flex items-center pt-4 mb-4">
        <FaUser className="w-32 h-32 mr-2 md:w-64 md:h-64"></FaUser>
        <h1 className="m-0 md:text-6xl md:font-light">Annie Lesny</h1>
      </div>
    </section>
  );
};

export default Hero;
