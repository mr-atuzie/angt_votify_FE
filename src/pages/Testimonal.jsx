import React from "react";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

const Testimonal = () => {
  return (
    <>
      <Navbar />
      <div className=" mt-[60px]">
        <Reviews />
        <Faq />
        <Banner />
        <Footer />
      </div>
    </>
  );
};

export default Testimonal;
