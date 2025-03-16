import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { formatter } from "../utils";
import { BiSolidBadgeCheck } from "react-icons/bi";
import Faq from "../components/Faq";
import Banner from "../components/Banner";
import PaystackPayment from "../components/PaystackPayment";
import { demo, pro, standard } from "../utils/subscriptionPlans";
import { selectUser } from "../redux/features/auth/authSlice";
import { useSelector } from "react-redux";

const Pricing = () => {
  const user = useSelector(selectUser);

  const FeatureItem = ({ text, color }) => (
    <div className="py-1 flex items-center gap-2">
      <BiSolidBadgeCheck className={`${color} text-lg`} />
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  );

  const [amount, setAmount] = useState(0);
  const [numberOfElection, setNumberOfElection] = useState("");
  const [customizePlan, setCustomizePlan] = useState({
    tier: "customize",
    voterLimit: 100,
    electionsAllowed: 0,
    amount: 0,
    currency: "USD",
  });

  const handleInputChange = (e) => {
    const value = e.target.value === "" ? "" : Number(e.target.value); // Allow empty string for controlled input

    setNumberOfElection(value); // Update input value
    setAmount(value ? (value * 0.147).toFixed(2) : 0); // Prevent NaN when empty

    setCustomizePlan((prev) => ({
      ...prev,
      electionsAllowed: value || 0, // Prevent NaN issue
      amount: value ? (value * 0.147).toFixed(2) : 0,
    }));
  };

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
          {/* DEMO PLAN */}
          <div className="bg-gradient-to-r from-pink-100 to-pink-300 rounded-xl p-6 border border-pink-500 shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-xl font-semibold uppercase text-pink-600">
              Demo Plan
            </h2>
            <p className="text-gray-600 text-sm my-4">
              Get started to explore how the voting app works.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <p className="text-3xl font-semibold">$8.00</p>
            </div>

            {user ? (
              <PaystackPayment
                btn_style={
                  "rounded-full w-full py-3 bg-pink-600 text-white hover:bg-pink-700 transition ease-in-out duration-300"
                }
                btn_text={"Try Demo Plan"}
                subscriptionPlan={demo}
                amount={demo.amount}
                email={user.email}
              />
            ) : (
              <button className="rounded-full w-full py-3 bg-pink-600 text-white hover:bg-pink-700 transition ease-in-out duration-300">
                Try Demo plan
              </button>
            )}

            {/* <FlutterwavePayment
              btn_style="rounded-full w-full py-3 bg-pink-600 text-white hover:bg-pink-700 transition ease-in-out duration-300"
              btn_text="Try Free Plan"
              amount={8}
              subscriptionPlan={{
                tier: "Demo",
                voterLimit: 15,
                electionsAllowed: 3,
              }}
            /> */}
            <div className="mt-6">
              <FeatureItem text="Up to 3 Elections" color="text-pink-600" />
              <FeatureItem text="Up to 15 voters" color="text-pink-600" />
              <FeatureItem text="Basic support" color="text-pink-600" />
            </div>
          </div>

          {/* Standard Plan */}
          <div className="bg-gradient-to-r from-green-100 to-green-300 rounded-xl p-6 border border-green-500 shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-xl font-semibold uppercase text-green-600">
              Standard Plan
            </h2>
            <p className="text-gray-600 text-sm my-4">
              Ideal for small groups or organizations with moderate voting
              needs.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <p className="text-3xl font-semibold">$17.00</p>
            </div>

            {user ? (
              <PaystackPayment
                btn_style={
                  "rounded-full w-full py-3 bg-green-600 text-white hover:bg-green-700 transition ease-in-out duration-300"
                }
                btn_text={"Get Standard Plan"}
                subscriptionPlan={standard}
                amount={standard.amount}
                email={user.email}
              />
            ) : (
              <button className="rounded-full w-full py-3 bg-green-600 text-white hover:bg-green-700 transition ease-in-out duration-300">
                Get Standard Plan
              </button>
            )}
            {/* <FlutterwavePayment
              btn_style="rounded-full w-full py-3 bg-green-600 text-white hover:bg-green-700 transition ease-in-out duration-300"
              btn_text="Get Standard Plan"
              amount={17}
              subscriptionPlan={{
                tier: "Standard",
                voterLimit: 30,
                electionsAllowed: 5,
              }}
            /> */}
            <div className="mt-6">
              <FeatureItem text="Up to 5 Elections" color="text-green-600" />
              <FeatureItem text="Up to 30 voters" color="text-green-600" />
              <FeatureItem text="Data export and more" color="text-green-600" />
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-r from-purple-100 to-purple-300 rounded-xl p-6 border border-purple-500 shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-xl font-semibold uppercase text-purple-600">
              Pro Plan
            </h2>
            <p className="text-gray-600 text-sm my-4">
              Advanced features for managing large-scale elections seamlessly.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <p className="text-3xl font-semibold">$30.00</p>
            </div>

            {user ? (
              <PaystackPayment
                btn_style={
                  "rounded-full w-full py-3 bg-purple-600 text-white hover:bg-purple-700 transition ease-in-out duration-300"
                }
                btn_text={"Get Pro Plan"}
                subscriptionPlan={pro}
                amount={pro.amount}
                email={user.email}
              />
            ) : (
              <button className="rounded-full w-full py-3 bg-purple-600 text-white hover:bg-purple-700 transition ease-in-out duration-300">
                Get Pro Plan
              </button>
            )}

            {/* <FlutterwavePayment
              btn_style="rounded-full w-full py-3 bg-purple-600 text-white hover:bg-purple-700 transition ease-in-out duration-300"
              btn_text="Get Pro Plan"
              amount={30}
              subscriptionPlan={{
                tier: "Pro",
                voterLimit: 300,
                electionsAllowed: 15,
              }}
            /> */}
            <div className="mt-6">
              <FeatureItem text="Up to 15 Elections" color="text-purple-600" />
              <FeatureItem text="Up to 300 voters" color="text-purple-600" />
              <FeatureItem
                text="Priority support and data export"
                color="text-purple-600"
              />
            </div>
          </div>

          {/* Custom Plan */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-300 rounded-xl p-6 border border-gray-500 shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-xl font-semibold uppercase text-gray-800">
              Custom Plan
            </h2>
            <p className="text-gray-600 text-sm my-4">
              Tailor-made solutions for your organization’s unique needs.
            </p>
            {amount > 0 && (
              <div className="flex items-center gap-2 mb-4">
                <p className="text-3xl font-semibold">${formatter(amount)}</p>
                <span className="text-xs">/ voters</span>
              </div>
            )}
            <input
              type="number"
              placeholder="Enter number of elections"
              className="mt-4 w-full py-3 mb-2 px-5 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none transition duration-200"
              onChange={handleInputChange}
              value={numberOfElection}
            />

            {user ? (
              <PaystackPayment
                btn_style="bg-black text-white w-full py-3 rounded-full hover:bg-gray-800 transition duration-300"
                btn_text="Customize Plan"
                amount={amount}
                subscriptionPlan={customizePlan}
                email={user.email}
              />
            ) : (
              <button className="bg-black text-white w-full py-3 rounded-full hover:bg-gray-800 transition duration-300">
                Customize Plan
              </button>
            )}

            {/* <FlutterwavePayment
              btn_style="bg-black text-white w-full py-3 rounded-full hover:bg-gray-800 transition duration-300"
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
