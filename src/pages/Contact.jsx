import React, { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !message) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    try {
      await axios.post("/api/v1/user/contact-us", {
        name,
        email,
        message,
      });

      toast.success(
        `Dear ${name} your message has been sent,The 2ruevote team will contact you shortly`
      );
      setName("");
      setEmail("");
      setMessage("");
      setLoading(false);
    } catch (error) {
      // toast.error(`Failed to send message, ${name}. Please try again.`);
      console.error(error);

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setLoading(false);
      toast.error(message);
    }
  };
  return (
    <>
      <Navbar />
      <section className=" w-full mt-[60px]  py-10  bg-blue-50 ">
        <div className="  w-[90%] lg:w-[60%] bg-white shadow-xl  rounded-lg  p-6  mx-auto  ">
          <div className=" flex flex-col gap-4 justify-center mb-10 items-center">
            <div className="  text-center px-6 py-1.5 text-sm text-blue-500 bg-blue-50 rounded-md w-fit">
              Contact us
            </div>
            <h1 className=" text-xl lg:text-4xl font-semibold -mt-2 text-center   max-w-lg">
              Want to get in touch with our team? We're all ears.
            </h1>
          </div>
          <form onSubmit={sendEmail} className=" lg:w-[75%] mx-auto my-8 ">
            <div className=" mb-8">
              <label
                className=" font-medium lg:font-semibold "
                htmlFor="from_name"
              >
                Name
              </label>
              <input
                name="from_name"
                type="text"
                className=" bg-gray-100 rounded block p-3 w-full placeholder:text-gray-400 placeholder:font-medium "
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className=" mb-8">
              <label
                className=" font-medium lg:font-semibold "
                htmlFor="from_email"
              >
                Email
              </label>
              <input
                name="from_email"
                type="email"
                placeholder="Enter Your Email"
                className=" bg-gray-100 rounded block p-3 w-full placeholder:text-gray-400 placeholder:font-medium "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className=" mb-8">
              <label
                className=" font-medium lg:font-semibold"
                htmlFor="message"
              >
                Message
              </label>

              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter Your Message"
                className=" bg-gray-100 rounded h-48 block p-3 w-full placeholder:text-gray-400 placeholder:font-medium"
              ></textarea>
            </div>

            <div className=" w-full flex justify-start">
              <button
                type="submit"
                disabled={loading}
                className=" disabled:opacity-50  rounded uppercase bg-blue-600 text-lg font-semibold text-white px-8 py-2 lg:py-4  hover:bg-white hover:text-purple-700 hover:border-2 hover:border-purple-700 "
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
