import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { formatter } from "../utils";
import { BiSolidBadgeCheck } from "react-icons/bi";
import Faq from "../components/Faq";
import Banner from "../components/Banner";

const Pricing = () => {
  const [amount, setAmount] = useState(0);
  const [numberOfElection, setNumberOfElection] = useState(0);

  const FeatureItem = ({ text, color }) => (
    <div className="py-1 flex items-center gap-2">
      <BiSolidBadgeCheck className={`${color} text-lg`} />
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  );

  let customizePlan = {};

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    setNumberOfElection(value);
    setAmount((value * 0.147).toFixed(2));

    customizePlan = {
      tier: "customize",
      voterLimit: 3000,
      electionsAllowed: numberOfElection,
    };
  };

  console.log(customizePlan);

  return (
    <div className="  min-h-screen">
      <Navbar />
      <div className=" py-5 mt-[60px] w-[90%] mx-auto bg-white">
        <div className=" flex flex-col gap-4 justify-center mb-10 items-center">
          <div className="  text-center text-blue-500 text-sm px-6 py-1.5 bg-blue-50 rounded-md w-fit">
            Pricing
          </div>
          <h1 className=" font-semibold capitalize text-xl lg:text-4xl -mt-2 text-center   max-w-lg">
            Give everyone a voice with the plan that’s right for you
          </h1>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className={`bg-pink-100 rounded-xl  p-6 border-2 border-pink-500`}
          >
            <h2 className="text-xl font-medium uppercase  tracking-wide">
              Free
            </h2>
            <h2 className=" text-gray-600 text-sm mb-6 ">
              Get started at no cost—ideal for small-scale elections and
              experiments.
            </h2>

            <div className=" flex gap-2 items-center">
              <p className="text-4xl font-medium">$0</p>
              <h2 className=" text-xs">/ month</h2>
            </div>
            <h2 className=" text-sm mb-6 text-gray-600">
              ${formatter(0 * 12)} Anually
            </h2>

            <button className=" bg-pink-600 w-full mb-6 text-clip py-2 rounded-full text-white ">
              Buy Basic
            </button>

            <di className=" mb-6">
              <h3 className="mb-1">All Basic features plus</h3>

              <div className=" py-1 gap-1 flex items-center">
                <span className=" text-pink-600">
                  <BiSolidBadgeCheck />
                </span>
                <p className="text-sm  text-gray-600">Up to 10 Elections</p>
              </div>
              <div className=" py-1 gap-1  flex items-center">
                <span className=" text-pink-600">
                  <BiSolidBadgeCheck />
                </span>
                <p className="text-gray-600">Up to 100 voters</p>
              </div>
              <div className=" py-1 gap-1 flex items-center">
                <span className=" text-pink-600">
                  <BiSolidBadgeCheck />
                </span>
                <p className="text-gray-600 ">Basic support</p>
              </div>
            </di>
          </div>

          <div
            className={`bg-green-100 rounded-xl  p-6 border-2 border-green-500`}
          >
            <h2 className="text-xl font-medium uppercase  tracking-wide">
              Standard
            </h2>
            <h2 className=" text-gray-600 text-sm mb-6 ">
              Perfect for growing organizations with moderate voting needs.
            </h2>

            <div className=" flex gap-2 items-center">
              <p className="text-4xl font-medium">$15.99</p>
              <h2 className=" text-xs">/ month</h2>
            </div>
            <h2 className=" text-sm mb-6 text-gray-600">
              ${formatter(15.99 * 12)} Anually
            </h2>

            <button className=" bg-green-600 w-full mb-6 text-clip py-2 rounded-full text-white ">
              Buy Standard
            </button>

            <di className=" mb-6">
              <h3 className="mb-1">All Standard features plus</h3>

              <div className=" py-1 gap-1 flex items-center">
                <span className=" text-green-600">
                  <BiSolidBadgeCheck />
                </span>
                <p className="text-sm  text-gray-600">Up to 2,000 Elections</p>
              </div>
              <div className=" py-1 gap-1  flex items-center">
                <span className=" text-green-600">
                  <BiSolidBadgeCheck />
                </span>
                <p className="text-gray-600">Up to 1,000 voters</p>
              </div>
              <div className=" py-1 gap-1 flex items-center">
                <span className=" text-green-600">
                  <BiSolidBadgeCheck />
                </span>
                <p className="text-gray-600 ">Basic support</p>
              </div>
              <div className=" py-1 gap-1 flex items-center">
                <span className=" text-green-600">
                  <BiSolidBadgeCheck />
                </span>
                <p className="text-gray-600 ">Data export and more</p>
              </div>
            </di>
          </div>

          <div
            className={`bg-purple-100 rounded-xl  p-6 border-2 border-purple-500`}
          >
            <h2 className="text-xl font-medium uppercase  tracking-wide">
              Pro
            </h2>
            <h2 className=" text-gray-600 text-sm mb-6 ">
              Advanced features for managing large-scale elections seamlessly
            </h2>

            <div className=" flex gap-2 items-center">
              <p className="text-4xl font-medium">$39.99</p>
              <h2 className=" text-xs">/ month</h2>
            </div>
            <h2 className=" text-sm mb-6 text-gray-600">
              ${formatter(39.99 * 12)} Anually
            </h2>

            <button className=" bg-purple-600 w-full mb-6 text-clip py-2 rounded-full text-white ">
              Buy Pro
            </button>

            <di className=" mb-6">
              <h3 className="mb-1">All Pro features plus</h3>

              <div className=" py-1 gap-1 flex items-center">
                <span className=" text-purple-600">
                  <BiSolidBadgeCheck />
                </span>
                <p className="text-sm  text-gray-600">Up to 5,000 Elections</p>
              </div>
              <div className=" py-1 gap-1  flex items-center">
                <span className=" text-purple-600">
                  <BiSolidBadgeCheck />
                </span>
                <p className="text-gray-600">Up to 2,000 voters</p>
              </div>
              <div className=" py-1 gap-1 flex items-center">
                <span className=" text-purple-600">
                  <BiSolidBadgeCheck />
                </span>
                <p className="text-gray-600 ">Basic support</p>
              </div>
              <div className=" py-1 gap-1 flex items-center">
                <span className=" text-purple-600">
                  <BiSolidBadgeCheck />
                </span>
                <p className="text-gray-600 ">Data export and more</p>
              </div>
            </di>
          </div>

          {/* Custom Plan */}
          <div className="bg-gray-200 rounded-xl p-6 border border-gray-500 shadow-md">
            <h2 className="text-lg font-semibold uppercase text-gray-800">
              Custom Plan
            </h2>
            <p className="text-gray-600 text-sm my-4">
              Tailor-made solutions for your organization’s unique needs.
            </p>
            {amount > 0 && (
              <div className="flex items-center gap-2">
                <p className="text-3xl font-semibold">${formatter(amount)}</p>
                <span className="text-xs">/ month</span>
              </div>
            )}
            <input
              type="number"
              placeholder="Enter number of elction"
              className="mt-4 w-full py-2 px-4 rounded-full bg-white border border-gray-300"
              onChange={handleInputChange}
            />
            <p className="text-sm text-gray-600 my-4">
              ${formatter(amount * 12)} Annually
            </p>

            <button className="bg-black text-white w-full py-2 rounded-full hover:bg-gray-800 transition">
              Custom Plan
            </button>

            {/* <FlutterwavePayment
              btn_style="bg-black text-white w-full py-2 rounded-full hover:bg-gray-800 transition"
              btn_text="Customize Plan"
              amount={amount}
              subscriptionPlan={customizePlan}
            /> */}
            <div className="mt-6">
              <FeatureItem text="Custom Elections" color="text-black" />
              <FeatureItem text="Custom Voter Limit" color="text-black" />
              <FeatureItem text="Premium Support" color="text-black" />
            </div>
          </div>
        </div>
      </div>
      <Faq />
      <Banner />
      <Footer />
    </div>
  );
};

export default Pricing;
