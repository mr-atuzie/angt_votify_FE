import About from "../components/About";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";

import Faq from "../components/Faq";
import Banner from "../components/Banner";
import WhatWeOffer from "../components/WhatWeOffer";
import StepsSection from "../components/StepsSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className=" mt-[60px]">
        <Hero />
        <About />
        <WhatWeOffer />
        <StepsSection />
        <Reviews />
        <Faq />
        <Banner />
        <Footer />
      </div>
    </>
  );
};

export default Home;
