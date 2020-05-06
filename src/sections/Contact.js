import React from "react";
import Socials from "../components/Socials";
import { FaUser } from "react-icons/fa";

import data from "../data/personal.json";

const Contact = () => {
  return (
    <section id="contact" className="wow">
      <div className="mb-4 bg-white card">
        <h2 className="font-bold text-primary">Contact</h2>
        <div className="flex">
          {/* <img src="/profile2.png" alt="Profile" className="w-32 h-32 mr-4 rounded-full" /> */}
          <div className="p-1 mr-4 text-gray-500 border rounded-full">
            <FaUser className="w-32 h-32 rounded-full"></FaUser>
          </div>
          <div className="flex flex-col justify-center md:justify-start">
            <span className="text-xl font-semibold">{data.full_name}</span>
            <a href={`mailto:${data.email}`} className="font-normal">
              {data.email}
            </a>
            <a href={`tel:+1${data.phone}`} className="font-normal">
              {data.phone}
            </a>
            <div className="mt-auto text-2xl">
              <Socials></Socials>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
