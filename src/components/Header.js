import React from "react";
import Socials from "../components/Socials";
import { FaEnvelope } from "react-icons/fa";

import data from "../data/personal.json";

const Header = () => {
  return (
    <header className="mb-4 shadow-lg bg-primary">
      <div className="flex flex-wrap items-baseline p-2 my-container">
        <h2 className="mb-0 mr-auto font-semibold tracking-wider text-gray-100">Tailwind Template</h2>
        <div className="flex text-xl text-gray-100">
          <Socials></Socials>
          <a href={`mailto:${data.email}`} className="font-normal">
            <FaEnvelope></FaEnvelope>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
