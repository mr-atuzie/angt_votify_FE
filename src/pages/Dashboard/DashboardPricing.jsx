import React, { useState } from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { formatter } from "../../utils";
import FlutterwavePayment from "../../components/FlutterwavePayment";

// import axios from "axios";
// import toast from "react-hot-toast";

const DashboardPricing = () => {
  // Helper Components
  const FeatureItem = ({ text, color }) => (
    <div className="py-1 flex items-center gap-2">
      <BiSolidBadgeCheck className={`${color} text-lg`} />
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
      voterLimit: 3000,
      electionsAllowed: numberOfElection,
    };
  };

  // const handleSubscribe = async ({ subscriptionPlan }) => {
  //   try {
  //     const { data } = await axios.patch(`/api/v1/user/subscribe`, {
  //       subscriptionPlan,
  //     });

  //     console.log(data);

  //     toast.success("subscription to free paln successfull");
  //   } catch (error) {
  //     const message =
  //       (error.response &&
  //         error.response.data &&
  //         error.response.data.message) ||
  //       error.message ||
  //       error.toString();

  //     toast.error(message);
  //   }
  // };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* demo Plan */}
        <div className="bg-pink-100 rounded-xl p-6 border border-pink-500 shadow-md">
          <h2 className="text-lg font-semibold uppercase text-pink-600">
            DEMO PLAN
          </h2>
          <p className="text-gray-600 text-sm my-2 lg:my-4">
            Get started to explore how the voting app works.
          </p>
          <div className="flex items-center gap-2 mb-2">
            <p className="text-3xl font-semibold">$8.00</p>
            {/* <span className="text-xs">/per month</span> */}
          </div>
          {/* <p className="text-sm text-gray-600 mb-4">
            ${formatter(0 * 12)} Annually
          </p> */}

          <FlutterwavePayment
            btn_style="rounded-full w-full py-2 bg-pink-600 text-white hover:bg-pink-700 transition"
            btn_text="Try Free Plan"
            amount={8}
            subscriptionPlan={{
              tier: "Demo",
              voterLimit: 15,
              electionsAllowed: 3,
            }}
          />
          <div className="mt-6">
            <FeatureItem text="Up to 3 Elections" color="text-pink-600" />
            <FeatureItem text="Up to 15 voters" color="text-pink-600" />
            <FeatureItem text="Basic support" color="text-pink-600" />
          </div>
        </div>

        {/* Standard Plan */}
        <div className="bg-green-100 rounded-xl p-6 border border-green-500 shadow-md">
          <h2 className="text-lg font-semibold uppercase text-green-600">
            Standard Plan
          </h2>
          <p className="text-gray-600 text-sm my-2 lg:my-4">
            Ideal for small groups or organizations with moderate voting needs.
          </p>
          <div className="flex items-center gap-2 mb-2">
            <p className="text-3xl font-semibold">$17.00</p>
            {/* <span className="text-xs">/ month</span> */}
          </div>
          {/* <p className="text-sm text-gray-600 mb-4">
            ${formatter(17 * 12)} Annually
          </p> */}
          <FlutterwavePayment
            btn_style="rounded-full w-full py-2 bg-green-600 text-white hover:bg-green-700 transition"
            btn_text="Get Standard Plan"
            amount={17}
            subscriptionPlan={{
              tier: "Standard",
              voterLimit: 30,
              electionsAllowed: 5,
            }}
          />
          <div className="mt-6">
            <FeatureItem text="Up to 5 Elections" color="text-green-600" />
            <FeatureItem text="Up to 30 voters" color="text-green-600" />
            <FeatureItem text="Data export and more" color="text-green-600" />
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-purple-100 rounded-xl p-6 border border-purple-500 shadow-md">
          <h2 className="text-lg font-semibold uppercase text-purple-600">
            Pro Plan
          </h2>
          <p className="text-gray-600 text-sm my-2 lg:my-4">
            Advanced features for managing large-scale elections seamlessly.
          </p>
          <div className="flex items-center gap-2 mb-2">
            <p className="text-3xl font-semibold">$30.00</p>
            {/* <span className="text-xs">/ month</span> */}
          </div>
          {/* <p className="text-sm text-gray-600 mb-4">
            ${formatter(30 * 12)} Annually
          </p> */}
          <FlutterwavePayment
            btn_style="rounded-full w-full py-2 bg-purple-600 text-white hover:bg-purple-700 transition"
            btn_text="Get Pro Plan"
            amount={30}
            subscriptionPlan={{
              tier: "Pro",
              voterLimit: 300,
              electionsAllowed: 15,
            }}
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
        <div className="bg-gray-200 rounded-xl p-6 border border-gray-500 shadow-md">
          <h2 className="text-lg font-semibold uppercase text-gray-800">
            Custom Plan
          </h2>
          <p className="text-gray-600 text-sm my-2 lg:my-4">
            Tailor-made solutions for your organization’s unique needs.
          </p>
          {amount > 0 && (
            <div className="flex items-center gap-2">
              <p className="text-3xl font-semibold">${formatter(amount)}</p>
              <span className="text-xs">/ voters</span>
            </div>
          )}
          <input
            type="number"
            placeholder="Enter number of elction"
            className="mt-4 w-full py-2 px-4 rounded-full bg-white border border-gray-300"
            onChange={handleInputChange}
          />
          {/* <p className="text-sm text-gray-600 my-4">
            ${formatter(amount * 12)} Annually
          </p> */}

          <FlutterwavePayment
            btn_style="bg-black text-white w-full py-2 rounded-full hover:bg-gray-800 transition"
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
