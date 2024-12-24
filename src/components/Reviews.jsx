import React from "react";
import { IoStar } from "react-icons/io5";

// Import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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
    {
      name: "Claire Evans",
      role: "Project Manager",
      location: "London, UK",
      feedback:
        "The fast, accurate results and customizable setup were just what we needed for our corporate elections. The secure voting process gave us confidence, and the dashboard made monitoring easy. Perfect for global organizations!",
    },
    {
      name: "Emily Thompson",
      role: "Project Manager",
      location: "New York, USA",
      feedback:
        "We used this system for our company's internal election, and it was a game-changer. The secure voting process and real-time tracking made everything easy to manage. Highly recommended!",
    },
    {
      name: "Samantha Williams",
      role: "Event Planner",
      location: "Johannesburg, South Africa",
      feedback:
        "The ease of user management and the fast, accurate results were exceptional. It’s the perfect tool for any event organizer.",
    },
    {
      name: "Aisha Bello",
      role: "NGO Program Coordinator",
      location: "Abuja, Nigeria",
      feedback:
        "The real-time monitoring and instant, accurate results made our elections stress-free. I’m recommending it to everyone in the sector!",
    },
    {
      name: "Chukwuemeka Okafor",
      role: "HR Manager",
      location: "Lagos, Nigeria",
      feedback:
        "The customizable setup allowed us to meet our specific needs, and the secure voting feature reassured everyone. It's perfect for Nigerian businesses!",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-1 bg-blue-50 text-blue-600 font-medium rounded-full">
            Testimonials
          </div>
          <h1 className="mt-4 text-xl lg:text-5xl font-bold text-gray-800">
            What Our Users Say
          </h1>
        </div>

        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
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
              <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition-shadow">
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.location}
                    </p>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <IoStar size={18} />
                    <IoStar size={18} />
                    <IoStar size={18} />
                    <IoStar size={18} />
                    <IoStar size={18} />
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {testimonial.feedback}
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
