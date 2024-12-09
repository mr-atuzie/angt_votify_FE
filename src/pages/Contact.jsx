import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_keu82gf", "template_hslu977", form.current, {
        publicKey: "5bwkLkCC1c3TQELzA",
      })
      .then(
        () => {
          toast.success("Email has been sent");
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          toast.error(error.text);
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <Navbar />
      <section className=" w-full  lg:py-10  bg-blue-50 ">
        <div className="  w-[90%] lg:w-[60%] bg-white shadow-xl  rounded-lg  py-6  mx-auto  ">
          <div className=" flex flex-col gap-4 justify-center mb-10 items-center">
            <div className="  text-center px-6 py-1.5 bg-blue-50 rounded-md w-fit">
              Contact us
            </div>
            <h1 className=" text-4xl font-semibold -mt-2 text-center   max-w-lg">
              Want to get in touch with our team? We're all ears.
            </h1>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" lg:w-[75%] mx-auto my-8 "
          >
            <div className=" mb-8">
              <label className=" font-semibold " htmlFor="from_name">
                Name
              </label>
              <input
                name="from_name"
                type="text"
                className=" bg-gray-100 rounded block p-3 w-full placeholder:text-gray-400 placeholder:font-medium "
                placeholder="Enter Your Name"
              />
            </div>

            <div className=" mb-8">
              <label className=" font-semibold " htmlFor="from_email">
                Email
              </label>
              <input
                name="from_email"
                type="email"
                placeholder="Enter Your Email"
                className=" bg-gray-100 rounded block p-3 w-full placeholder:text-gray-400 placeholder:font-medium "
              />
            </div>

            <div className=" mb-8">
              <label className=" font-semibold" htmlFor="message">
                Message
              </label>

              <textarea
                name="message"
                id="message"
                placeholder="Enter Your Message"
                className=" bg-gray-100 rounded h-48 block p-3 w-full placeholder:text-gray-400 placeholder:font-medium"
              ></textarea>
            </div>

            <div className=" w-full flex justify-start">
              <button
                type="submit"
                className="  rounded uppercase bg-blue-600 text-lg font-semibold text-white px-8 py-2 lg:py-4  hover:bg-white hover:text-purple-700 hover:border-2 hover:border-purple-700 "
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>
      <Banner />
      <Footer />
    </>
  );
};

export default Contact;
