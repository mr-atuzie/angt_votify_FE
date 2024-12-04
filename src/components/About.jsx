import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen   flex justify-center items-center bg-orange-50 py-8 lg:py-16">
      <div className=" w-[90%] lg:w-[85%]  mx-auto  flex lg:justify-between  lg:items-center flex-col lg:flex-row">
        <div className="text-center lg:hidden">
          <h4 className=" text-4xl font-semibold mb-4 text-pink-500 ">About</h4>
        </div>
        <img
          src="https://www.womanandhomemagazine.co.za/wp-content/uploads/2024/08/Snapinsta.app_454840032_18450252382052984_7286448054781192942_n_1080.jpg"
          alt=""
          className=" rounded w-[500px]"
        />

        <div>
          <h4 className=" hidden lg:block text-4xl font-semibold text-purple-600 ">
            About us
          </h4>
          <h2 className=" hidden lg:block text-2xl lg:text-4xl font-extrabold mb-4">
            About Luxe Lueur
          </h2>

          <div className=" mt-2 lg:mt-0 lg:max-w-2xl">
            <p className=" text-sm lg:text-base text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              quisquam voluptates eum laboriosam excepturi molestiae nulla nihil
              iste non labore.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Rem praesentium quis excepturi harum.Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Rem praesentium quis excepturi
              harum.
            </p>

            <p className="text-sm lg:text-base text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              praesentium quis excepturi harum.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Rem praesentium quis excepturi
              harum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
