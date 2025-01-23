import React, { useState } from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { formatter } from "../../utils";
import FlutterwavePayment from "../../components/FlutterwavePayment";
import { demo, pro, standard } from "../../utils/subscriptionPlans";

const DashboardPricing = () => {
  const FeatureItem = ({ text, color }) => (
    <div className="flex items-center lg:gap-3 py-1 text-sm">
      <BiSolidBadgeCheck className={`${color} text-xl`} />
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  );

  const [amount, setAmount] = useState(0);
  const [numberOfElection, setNumberOfElection] = useState(0);

  let customizePlan = {};

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    setNumberOfElection(value);
    setAmount((value * 0.147).toFixed(2));

    customizePlan = {
      tier: "customize",
      voterLimit: 100,
      electionsAllowed: numberOfElection,
      amount: (value * 0.147).toFixed(2),
      currency: "USD",
    };
  };

  return (
    <div className="min-h-screen  flex flex-col p-3 gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* DEMO PLAN */}
        <div className="bg-gradient-to-r from-pink-100 to-pink-300 rounded-xl p-6 border border-pink-500 shadow-lg transform hover:scale-105 transition duration-300">
          <h2 className="text-xl font-semibold uppercase text-pink-600">
            Demo Plan
          </h2>
          <p className="text-gray-600 text-sm my-4">
            Get started to explore how the voting app works.
          </p>
          <div className="flex items-center gap-2 mb-4">
            <p className="text-3xl font-semibold  text-pink-600">$8.00</p>
          </div>
          <FlutterwavePayment
            btn_style="rounded-full w-full py-3 bg-pink-600 text-white hover:bg-pink-700 transition ease-in-out duration-300"
            btn_text="Try Demo Plan"
            amount={demo.amount}
            subscriptionPlan={demo}
          />
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
          <p className="text-gray-600 text-sm my-4 ">
            Ideal for small groups or organizations with moderate voting needs.
          </p>
          <div className="flex items-center gap-2 mb-4">
            <p className="text-3xl font-semibold text-green-600">$17.00</p>
          </div>
          <FlutterwavePayment
            btn_style="rounded-full w-full py-3 bg-green-600 text-white hover:bg-green-700 transition ease-in-out duration-300"
            btn_text="Get Standard Plan"
            amount={standard.amount}
            subscriptionPlan={standard}
          />
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
            <p className="text-3xl font-semibold  text-purple-600">$30.00</p>
          </div>
          <FlutterwavePayment
            btn_style="rounded-full w-full py-3 bg-purple-600 text-white hover:bg-purple-700 transition ease-in-out duration-300"
            btn_text="Get Pro Plan"
            amount={pro.amount}
            subscriptionPlan={pro}
          />
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
            className="mt-4 w-full py-3  mb-2 px-5 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none transition duration-200"
            onChange={handleInputChange}
          />
          <FlutterwavePayment
            btn_style="bg-black text-white w-full py-3 rounded-full hover:bg-gray-800 transition duration-300"
            btn_text="Customize Plan"
            amount={amount}
            subscriptionPlan={customizePlan}
          />
          <div className="mt-6">
            <FeatureItem text="Custom Elections" color="text-black" />
            <FeatureItem text="Custom Voter Limit" color="text-black" />
            <FeatureItem text="Premium Support" color="text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPricing;
