import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Seo from "./Seo";

const Layout = ({ children }) => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      const WOW = require("wowjs");
      new WOW.WOW({ live: false, mobile: true }).init();
    }
  }, []);
  return (
    <>
      <Seo></Seo>
      <div className="flex flex-col min-h-screen text-gray-800 bg-gray-200">
        <Header></Header>
        <main className="flex flex-col p-2 mb-auto my-container">{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
