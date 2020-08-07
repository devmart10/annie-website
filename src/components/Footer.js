import React from "react";

import data from "../data/personal.json";

const Footer = () => {
  return <footer className="py-1 text-center text-gray-500 shadow-lg">&copy; 2020 {data.full_name}</footer>;
};

export default Footer;
