import React from "react";
import Marquee from "react-fast-marquee";

const Partners = () => {
  const logos = [
    // {
    //   img: "https://logomak.com/blog/wp-content/uploads/2023/09/Mastercard-logo-500x281-min.png",
    // },
    {
      img: "https://logomak.com/blog/wp-content/uploads/2023/09/McDonalds-logo-500x281-min.png",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqIqYQfNEDn3oCmqg9KCOhctlHVAusITKLDA&s",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZ61YVs3aBIsvkHzSvuD7p510jcX2hlLwNw&s",
    },
    {
      img: "https://static-00.iconduck.com/assets.00/globacom-limited-icon-2048x2048-uovm3iz4.png",
    },

    {
      img: "https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZvyZGvu4n4g8IS-ZUURV0JnT3tFCoRSrKQ&s",
    },

    {
      img: "https://www.nourhan.com/wp-content/uploads/2016/09/indomie-logo.png",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkT3mS6rRD5tN-EXsCTCoOx85Sg3qRMC4Pg&s",
    },
  ];
  return (
    <div className="  py-4 lg:py-8">
      <div className=" w-[90%] lg:w-[60%] mx-auto">
        {/* <h4 className="text-center capitalize text-4xl font-extrabold mb-4 text-pink-500">
          partners
        </h4> */}
        {/* <h1>SPON</h1> */}

        <Marquee direction="right" speed={70} gradient={false} pauseOnHover>
          <div className=" flex gap-5  mx-2">
            {logos.map((logo, index) => {
              return (
                <img
                  className=" w-10 rounded-sm object-contain lg:w-24"
                  key={index}
                  src={logo.img}
                  alt=""
                />
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
