import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

import data from "../data/personal.json";

const Socials = () => {
  return (
    <div className="flex">
      <a target="_blank" rel="noopener" href={data.socials.facebook} className="pr-2">
        <FaFacebook></FaFacebook>
      </a>
      <a target="_blank" rel="noopener" href={data.socials.linkedin} className="pr-2">
        <FaLinkedin></FaLinkedin>
      </a>
    </div>
  );
};

export default Socials;
