import React from "react";
import Layout from "../src/components/Layout";

import AboutMe from "../src/sections/AboutMe";
import Contact from "../src/sections/Contact";

const Index = () => {
  return (
    <Layout>
      <AboutMe></AboutMe>
      <Contact></Contact>
    </Layout>
  );
};

export default Index;
