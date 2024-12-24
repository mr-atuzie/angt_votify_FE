import About from "../components/About";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import Features from "../components/Features";
import Faq from "../components/Faq";
import Banner from "../components/Banner";
import WhatWeOffer from "../components/WhatWeOffer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhatWeOffer />
      <Features />
      <Reviews />
      <Faq />
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
