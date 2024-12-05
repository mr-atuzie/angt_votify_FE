import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div className=" flex items-center bg-blue-50 justify-center">
      <div className="bg-white py-10  rounded-2xl w-[97%] my-4  flex flex-col items-center gap-5 justify-center">
        <div className=" flex flex-col gap-4 justify-center mb-10 items-center">
          <div className="  text-center px-6 py-1.5 bg-blue-50 rounded-md w-fit">
            FAQ
          </div>
          <h1 className=" text-4xl text-center">Frequently Asked Questions</h1>
        </div>
        {/* <div className=" w-full"> */}
        <Accordion
          title="Does Election Runner offer educational discounts?"
          answer="Absolutely! Election Runner was built with schools in mind. We offer significant K-12 and University discounts/subscriptions. Please contact us for more information."
        />
        <Accordion
          title="Does Election Runner offer educational discounts?"
          answer="Absolutely! Election Runner was built with schools in mind. We offer significant K-12 and University discounts/subscriptions. Please contact us for more information."
        />
        <Accordion
          title="Does Election Runner offer educational discounts?"
          answer="Absolutely! Election Runner was built with schools in mind. We offer significant K-12 and University discounts/subscriptions. Please contact us for more information."
        />
        <Accordion
          title="Does Election Runner offer educational discounts?"
          answer="Absolutely! Election Runner was built with schools in mind. We offer significant K-12 and University discounts/subscriptions. Please contact us for more information."
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Faq;
