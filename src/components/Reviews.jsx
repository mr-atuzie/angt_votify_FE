import React from "react";
import { IoStar } from "react-icons/io5";

const Reviews = () => {
  const testimonals = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="w-full  py-16">
      <div className=" w-[90%]  mx-auto ">
        <div className=" flex flex-col gap-4 justify-center mb-10 items-center">
          <div className="  text-center px-6 py-1.5 bg-blue-50 rounded-md w-fit">
            Testimonial
          </div>
          <h1 className=" text-4xl text-center">What our users say</h1>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {testimonals.map((testimonal) => {
            return (
              <div className=" border rounded-lg p-5">
                <div className=" flex justify-between items-center">
                  <div className=" flex items-center   my-4 gap-2">
                    <img
                      src="https://www.slido.com/static/wade.42fcba32.1184.png"
                      className=" w-10 h-10 rounded-full object-cover"
                      alt=""
                    />
                    <div>
                      <h3 className="">Peter Dury</h3>
                      <p className=" text-sm text-gray-400 -mt-1">
                        sport analyst
                      </p>
                    </div>
                  </div>

                  <div className=" flex items-center gap-1 text-yellow-400">
                    <IoStar size={20} />
                    <IoStar size={20} />
                    <IoStar size={20} />
                    <IoStar size={20} />
                    <IoStar size={20} />
                  </div>
                </div>

                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore consequatur neque debitis vel porro, cupiditate
                  aliquam, consectetur sed quisquam numquam asperiores
                  accusantium, tempora nesciunt molestias.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
