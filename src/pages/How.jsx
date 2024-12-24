import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import StepsSection from "../components/StepsSection";
import WhatWeOffer from "../components/WhatWeOffer";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const How = () => {
  return (
    <div>
      <Navbar />
      <div className=" mt-[60px]">
        <About />
        <StepsSection />
        <WhatWeOffer />
        <Banner />
        <Footer />
      </div>
    </div>
  );
};

export default How;
