import React, { useState } from "react";

const faqs = [
  {
    question: "Fly during the working week",
    answer:
      "Opting to take your flight during the working week can save you money. Flights departing over this period – especially Tuesdays and Wednesdays – are cheaper, mainly because these days are less popular to travel on.",
  },
  {
    question: "Have a look at airline websites",
    answer:
      'Many airline websites have made it simpler to identify the inexpensive days to fly by displaying a "calendar view" booking system. This system allows you to scan prices ranging across the week that you are searching.',
  },
  {
    question: "Consider flights with less-popular departure times",
    answer:
      "You may also get a bargain flight if you’re willing to fly at an early hour. It may well be less expensive to fly at 6 am than at later times due to that time spot being less popular. The only problem you could face is getting to the airport at this time; make sure that public transport is running if you can’t take a taxi or get a lift to the airport.",
  },
  {
    question: "Find a better price on the Trip.com app",
    answer:
      "This may sound like I’m stating the obvious, but you’d be surprised at the number of people who settle for a price without first shopping around and doing some research. We suggest you have a look for bargains on the Trip.com app. The Trip.com Save & Fly browser extension is a big help when learning how to get cheap flight tickets. While you’re looking for airline tickets online, the extension notifies you of whether the exact same flight is available on Trip.com at a better price. It’s completely free to install and use, and it takes some of the pressure off booking your tickets.",
  },
  {
    question: "Book early instead of waiting until the last minute",
    answer: "",
  },
  {
    question: "Use a credit card in a wiser way",
    answer: "",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[1200px] mx-auto p-4 bg-white rounded-lg shadow-lg mt-12">
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
