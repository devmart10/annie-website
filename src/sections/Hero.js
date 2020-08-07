import React from "react";
import { FaUser } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero">
      <div className="flex items-center pt-4 mb-4 md:my-16">
        <div className="relative hidden md:block md:flex-shrink-0">
          <img src="https://picsum.photos/500/500" alt="" className="w-full h-auto rounded-lg" />
          <div className="absolute inset-0 w-full h-full bg-white opacity-75"></div>
        </div>
        <div className="z-10 md:-ml-32">
          <h1 className="m-0 md:text-6xl md:mb-4 md:font-light">Soul-Centered Services</h1>
          <p className="md:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus animi adipisci ratione libero optio
            incidunt quaerat? Suscipit soluta facilis odio dignissimos consequuntur hic repellendus sequi quidem rerum
            dolorem incidunt facere sunt sapiente quod officiis, illum a recusandae praesentium culpa fugit adipisci
            quae aperiam. Odit id doloremque corrupti quis rerum! Labore?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
