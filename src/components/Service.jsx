import React from "react";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Haircut and Styling",
      img: "https://images.squarespace-cdn.com/content/v1/5bfd9a68aa49a1865f080c6a/1554693131691-HGLLBLRWJX8J7QAKE3MD/Photo+1.jpg",
      desc: "Our skilled stylists are experts in creating trendy and personalized haircuts tailored to your unique features and preferences. Whether you're looking for a classic cut or a bold new style, we've got you covered.",
    },
    {
      id: 2,
      title: "Hair Coloring",
      img: "https://img.freepik.com/premium-photo/drying-short-pink-bob-hairstyle-young-caucasian-woman-with-black-hair-dryer-with-brush-by-hands-male-hairdresser-hair-salon-close-up_141172-12085.jpg",
      desc: "Transform your look with our professional hair coloring services. From natural hues to vibrant fashion shades, our colorists use high-quality products to achieve the perfect, long-lasting color for your hair.",
    },
    {
      id: 3,
      title: "Manicure and Pedicure",
      img: "https://cdn.scratchmagazine.co.uk/wp-content/uploads/2019/05/Emma-Grant-African-Pedicure.jpg",
      desc: "Indulge in a pampering experience for your hands and feet. Our manicure and pedicure services include nail shaping, cuticle care, massage, and a variety of polish options to leave your nails looking and feeling fabulous.",
    },
    {
      id: 4,
      title: "Facials",
      img: "https://jawedhabiblucknow.com/images/blog/1/facial-in-lucknow.jpg",
      desc: "Rejuvenate your skin with our customized facial treatments. Our experienced estheticians use premium skincare products to cleanse, exfoliate, and nourish your skin, leaving you with a radiant and refreshed complexion",
    },
    {
      id: 5,
      title: "Waxing",
      img: "https://premiermedspatx.com/storage/2021/04/How-does-body-waxing-work-TX-premiermedspatx-scaled.jpeg",
      desc: "Achieve smooth, hair-free skin with our professional waxing services. From eyebrows to legs, our trained technicians use gentle techniques and high-quality waxes to ensure a comfortable and effective hair removal experience.",
    },
    {
      id: 6,
      title: "Makeup",
      img: "https://img.freepik.com/premium-photo/make-up-artist-applying-professional-make-up-beautiful-middle-aged-woman_473712-3951.jpg",
      desc: "Let our makeup artists enhance your natural beauty for any occasion. Whether it's a subtle everyday look or a glamorous evening appearance, we use top-notch products to create a flawless finish that suits your style.",
    },
    {
      id: 7,
      title: "Eyelash Extensions",
      img: "https://lash-crush.com/wp-content/uploads/2021/03/AdobeStock_127818109.jpg",
      desc: "Accentuate your eyes with our eyelash extension services. Our skilled technicians apply individual lashes to enhance length and volume, creating a stunning, natural-looking effect that lasts for weeks.",
    },
  ];
  return (
    <div className="w-full bg-purple-100  py-10 flex flex-col  justify-center items-center lg:py-16">
      <div className=" text-center">
        <h4 className=" text-4xl font-semibold text-center text-purple-600 ">
          What we do
        </h4>
        <h2 className=" text-center text-2xl lg:text-4xl font-extrabold ">
          Our Service
        </h2>

        <p className=" text-xs text-center text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          harum quisquam itaque quas?
        </p>
      </div>

      <div className=" w-[90%] lg:w-[85%] mt-10  mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {services.map((service) => {
          const { id, title, img, desc } = service;
          return (
            <div key={id}>
              <img className=" rounded" src={img} alt="" />

              <h2 className="font-semibold text-sm lg:text-base text-center my-2">
                {title}
              </h2>
              <p className=" text-xs lg:text-sm text-center">{desc}</p>
            </div>
          );
        })}
      </div>

      <div className=" flex justify-center items-center  mt-10">
        <button className=" font-medium text-[12px] lg:text-sm px-4 py-2  border border-purple-600 uppercase bg-white text-purple-600  hover:bg-purple-600 hover:text-white ease-in-out duration-300">
          book appointment
        </button>
      </div>
    </div>
  );
};

export default Service;
