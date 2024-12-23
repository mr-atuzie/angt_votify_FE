import React from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { formatter, getUserInitials } from "../../utils";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { IoAddSharp } from "react-icons/io5";
import FlutterwavePayment from "../../components/FlutterwavePayment";

const DashboardPricing = () => {
  const { fullname } = useSelector(selectUser);

  // Helper Components
  const FeatureItem = ({ text, color }) => (
    <div className="py-1 flex items-center gap-1">
      <BiSolidBadgeCheck className={color} />
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Subscriptions
          </h1>
          <h1 className="text-gray-500">
            Welcome Back, <span className="text-blue-600">{fullname}</span>
          </h1>
        </div>

        <div className="flex gap-5 items-center">
          <Link to={"/create-election"}>
            <button className="bg-blue-600 flex gap-2 items-center text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300">
              <IoAddSharp size={20} />
              <span>Add Election</span>
            </button>
          </Link>

          <button className="bg-white shadow-md font-medium tracking-wider uppercase border border-blue-600 text-blue-600 px-4 py-2 w-12 h-12 text-lg text-center flex justify-center items-center rounded-full hover:bg-blue-700 transition">
            {getUserInitials(fullname)}
          </button>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Free Plan */}
        <div className="bg-pink-100 rounded-xl p-6 border-2 border-pink-500">
          <h2 className="text-xl font-medium uppercase text-pink-600 tracking-wide">
            Free Plan
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Get started at no cost—ideal for small-scale elections and
            experiments.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-4xl font-medium">$0</p>
            <span className="text-xs">/ month</span>
          </div>
          <p className="text-sm mb-6 text-gray-600">
            ${formatter(0 * 12)} Annually
          </p>

          <FlutterwavePayment
            btn_style={"rounded-full w-full  py-2 bg-pink-600 text-white"}
            btn_text={" Try free plan"}
            amount={1}
            subscriptionPlan={{
              tier: "Free",
              voterLimit: 100,
              electionsAllowed: 50,
            }}
          />

          <div className="mt-6">
            <h3 className="mb-1">All Basic features plus:</h3>
            <FeatureItem text="Up to 10 Elections" color="text-pink-600" />
            <FeatureItem text="Up to 100 voters" color="text-pink-600" />
            <FeatureItem text="Basic support" color="text-pink-600" />
          </div>
        </div>

        {/* Standard Plan */}
        <div className="bg-green-100 rounded-xl p-6 border-2 border-green-500">
          <h2 className="text-xl font-medium text-green-600 uppercase tracking-wide">
            Standard plan
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Perfect for growing organizations with moderate voting needs.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-4xl font-medium">$17.00</p>
            <span className="text-xs">/ month</span>
          </div>
          <p className="text-sm mb-6 text-gray-600">
            ${formatter(17.0 * 12)} Annually
          </p>

          <FlutterwavePayment
            btn_style={"rounded-full w-full  py-2 bg-green-600 text-white"}
            btn_text={" Get standard plan"}
            amount={17}
            subscriptionPlan={{
              tier: "Standard",
              voterLimit: 100,
              electionsAllowed: 50,
            }}
          />

          <div className="mt-6">
            <h3 className="mb-1">All Standard features plus:</h3>
            <FeatureItem text="Up to 2,000 Elections" color="text-green-600" />
            <FeatureItem text="Up to 1,000 voters" color="text-green-600" />
            <FeatureItem text="Data export and more" color="text-green-600" />
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-purple-100 rounded-xl p-6 border-2 border-purple-500">
          <h2 className="text-xl font-medium uppercase text-purple-600 tracking-wide">
            Pro plan
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Advanced features for managing large-scale elections seamlessly.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-4xl font-medium">$30.00</p>
            <span className="text-xs">/ month</span>
          </div>
          <p className="text-sm mb-6 text-gray-600">
            ${formatter(30.0 * 12)} Annually
          </p>

          <FlutterwavePayment
            btn_style={"rounded-full w-full  py-2 bg-purple-600 text-white"}
            btn_text={" Get Pro plan"}
            amount={30}
            subscriptionPlan={{
              tier: "Pro",
              voterLimit: 300,
              electionsAllowed: 100,
            }}
          />

          <div className="mt-6">
            <h3 className="mb-1">All Pro features plus:</h3>
            <FeatureItem text="Up to 5,000 Elections" color="text-purple-600" />
            <FeatureItem text="Up to 2,000 voters" color="text-purple-600" />
            <FeatureItem
              text="Data export and priority support"
              color="text-purple-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPricing;
