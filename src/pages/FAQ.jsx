import React from "react";
import Navbar from "../components/Navbar";
import Faq from "../components/Faq";
import Reviews from "../components/Reviews";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const FAQ = () => {
  return (
    <>
      <Navbar />
      <div className=" mt-[60px]">
        <Faq />
        <Reviews />
        <Banner />
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
