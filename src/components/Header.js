import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="mb-4 text-gray-100 bg-primary">
      <div className="flex flex-wrap items-center px-4 py-2 my-container">
        <button className="p-1 mr-2 border rounded flex-center">
          <FaBars className="w-6 h-6"></FaBars>
        </button>
        <h2 className="mb-0">Annie Lesny</h2>
      </div>
    </header>
  );
};

export default Header;
