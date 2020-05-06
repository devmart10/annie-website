import React from "react";
import Layout from "../src/components/Layout";

import AboutMe from "../src/sections/AboutMe";
import Contact from "../src/sections/Contact";
import Hero from "../src/sections/Hero";

const Index = () => {
  return (
    <Layout>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Contact></Contact>
    </Layout>
  );
};

export default Index;
