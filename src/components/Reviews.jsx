import React from "react";
import { IoStar } from "react-icons/io5";

// Import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Reviews = () => {
  const testimonials = [
    {
      name: "Daniel Martinez",
      role: "Tech Consultant",
      location: "São Paulo, Brazil",
      feedback:
        "This voting system exceeded our expectations. The secure process and real-time tracking made it ideal for our tech conference elections. It’s a fantastic solution for international events.",
    },
    {
      name: "Kwame Mensah",
      role: "Entrepreneur",
      location: "Accra, Ghana",
      feedback:
        "Running elections in our cooperative society was always a hassle, but this platform simplified everything. The dashboard is user-friendly, and the secure voting gave everyone confidence in the process. Highly recommended for African SMEs!",
    },
    // Add more testimonials...
  ];

  return (
    <section className="w-full py-5 lg:py-16 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="px-4 py-1 bg-blue-100 text-blue-700 font-medium text-sm rounded-full tracking-wide">
            Testimonials
          </span>
          <h1 className="mt-4 text-xl lg:text-4xl font-extrabold text-gray-800">
            What Our Users Say
          </h1>
          <p className="mt-2 text-gray-600">
            Hear from our satisfied users worldwide.
          </p>
        </div>

        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-100 hover:shadow-xl transition-transform transform hover:-translate-y-1">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-blue-500">
                    {testimonial.role}, {testimonial.location}
                  </p>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <IoStar key={i} size={16} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic  my-2 leading-relaxed">
                  "{testimonial.feedback}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
