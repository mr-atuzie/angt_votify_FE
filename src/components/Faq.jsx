import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div className="flex items-center bg-blue-50 justify-center">
      <div className="bg-white py-10 rounded-2xl w-[97%] my-4 flex flex-col items-center gap-5 justify-center">
        <div className="flex flex-col gap-4 justify-center mb-10 items-center">
          <div className="text-center px-6 py-1.5 bg-blue-50 rounded-md w-fit">
            FAQ
          </div>
          <h1 className="text-xl lg:text-4xl font-semibold text-center">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="w-full lg:w-[60%] px-4 lg:px-0">
          <Accordion
            title="Does 2rueVote offer educational discounts?"
            answer="Absolutely! 2rueVote was designed with educational institutions in mind. We offer significant discounts for K-12 schools and universities. Please contact us for more details."
          />
          <Accordion
            title="Can 2TrueVote handle large-scale elections?"
            answer="Yes, 2TrueVote is built to handle elections of all sizes, from small community events to large-scale national elections. Our platform ensures a smooth voting experience regardless of the number of participants."
          />
          <Accordion
            title="Is 2rueVote secure?"
            answer="Yes, security is a top priority at 2rueVoter. We use state-of-the-art encryption and data protection measures to ensure that your votes and personal information remain safe."
          />
          <Accordion
            title="Can I customize the voting process on 2rueVoter?"
            answer="Absolutely! 2rueVote offers a variety of customizable features, allowing you to tailor the voting process to suit your specific needs. Whether it's adding custom fields or setting up specific voting rules, we’ve got you covered."
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
