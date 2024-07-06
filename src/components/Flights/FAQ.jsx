import React, { useState } from "react";


const FAQ = ({faqs}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[1300px] mx-auto p-4 bg-white rounded-lg shadow-lg mt-12 ">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        How to Book Cheap Flights?
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left text-md flex justify-between items-center font-semibold text-gray-800 bg-gray-100 px-4 py-2 rounded-md focus:outline-none"
          >
            <span>{faq.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`w-4 h-4`}
            >
              <path
                d={
                  openIndex === index
                    ? "M4.887 15.905a1.496 1.496 0 010-2.008l6.397-5.948a1 1 0 011.358-.004l6.532 6.012a1.427 1.427 0 01-.138 1.948 1.572 1.572 0 01-1.997.103L11.96 11.37l-4.97 4.535a1.72 1.72 0 01-2.104 0z"
                    : "M19.113 8.095a1.496 1.496 0 010 2.008l-6.397 5.948a1 1 0 01-1.358.003l-6.532-6.01a1.427 1.427 0 01.138-1.949 1.572 1.572 0 011.997-.103l5.078 4.638 4.97-4.535a1.72 1.72 0 012.104 0z"
                }
              />
            </svg>
          </button>

          {openIndex === index && (
            <div className="px-4 py-2 text-gray-700 bg-gray-50 rounded-b-md">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
