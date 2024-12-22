import React from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { formatter } from "../../utils";

const DashboardPricing = () => {
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className={`bg-pink-100 rounded-xl  p-6 border-2 border-pink-500`}>
          <h2 className="text-xl font-medium uppercase  tracking-wide">Free</h2>
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
          <h2 className="text-xl font-medium uppercase  tracking-wide">Pro</h2>
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

        <div className={`bg-gray-100 rounded-xl  p-6 border-2 `}>
          <h2 className="text-xl font-medium uppercase  tracking-wide">
            Custom
          </h2>
          <h2 className=" text-gray-600 text-sm mb-6 ">
            Tailor-made solutions to fit the unique needs of your organization.
          </h2>

          <div className=" gap-2 hidden items-center">
            <p className="text-4xl font-medium"></p>
            <h2 className=" text-xs">/ month</h2>
          </div>
          <h2 className=" hidden text-sm mb-6 text-gray-600">
            ${formatter(39.99 * 12)} Anually
          </h2>

          <input
            className=" bg-white w-full  py-2 px-4 mb-2  rounded-md  border-none placeholder:font-normal placeholder:text-sm"
            placeholder="Enter number of voters"
            type="text"
          />
          <button className=" bg-black text-sm  mb-6 text-center px-6 py-1 rounded-md text-white ">
            Enter
          </button>

          <di className=" mb-6">
            <h3 className="mb-1">All custom features plus</h3>

            <div className=" py-1 gap-1 flex items-center">
              <span className=" text-black">
                <BiSolidBadgeCheck />
              </span>
              <p className="text-sm  text-gray-600">Up to 5,000 Elections</p>
            </div>
            <div className=" py-1 gap-1  flex items-center">
              <span className=" text-black">
                <BiSolidBadgeCheck />
              </span>
              <p className="text-gray-600">Up to 2,000 voters</p>
            </div>
            <div className=" py-1 gap-1 flex items-center">
              <span className=" text-black">
                <BiSolidBadgeCheck />
              </span>
              <p className="text-gray-600 ">Basic support</p>
            </div>
            <div className=" py-1 gap-1 flex items-center">
              <span className=" text-black">
                <BiSolidBadgeCheck />
              </span>
              <p className="text-gray-600 ">Data export and more</p>
            </div>
          </di>
        </div>
      </div>
    </div>
  );
};

export default DashboardPricing;
