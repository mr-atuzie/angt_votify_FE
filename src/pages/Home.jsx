import About from "../components/About";
import Hero from "../components/Hero";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import How from "../components/How";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <How />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
