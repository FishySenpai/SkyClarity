import React, { useState, useEffect, useRef } from "react";
import flightsImg from "./Assets/flights-img.jpg";
import planeImg from "./Assets/plane.png";
import clockImg from "./Assets/clock.png";
import handshakeImg from "./Assets/handshake.png";
import faqs from "../faq.json";
import FlightCards from "./FlightCards";
import FAQ from "./FAQ";
import FlightsSearch from "./FlightsSearch";
import flightCards from "./Assets/flightCards.json";
const Home = () => {
  const [flights, setFlights] = useState();
  const [selectedOption, setSelectedOption] = useState("round-trip");
  return (
    <div className=" text-white default-font relative bg-gray-50  ">
      <img
        src={flightsImg}
        className="absolute inset-0 w-full h-[578px] object-cover"
      />

      <div className="absolute top-36 1lg:top-52 w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-start 1md:items-center">
          <div className="h-[160px] w-full 1md:w-fit relative">
            <div className="text-4xl 1lg:text-5xl pb-3 text-white font-bold text-left ml-2">
              Find cheap flight deals
            </div>
            <FlightsSearch
              flight={flights}
              setFlights={setFlights}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
        </div>
      </div>
      <div
        className={`relative bg-gray-100 pb-24 rounded-t-3xl ${
          selectedOption === "multi-city" ? "top-[650px]" : "top-[600px]"
        }`}
      >
        <div className="text-3xl pb-3 text-gray-800 font-bold pt-12 pl-6 sm:pl-0 sm:w-[600px] 1sm:w-[680px]  1md:w-[820px] lg:w-[935px] 1lg:w-[935px] 1xl:w-[1240px] flex flex-col 
        mx-auto 1xl:pl-5">
          <div>Popular Internaional Flight Deals</div>
          <span className="text-gray-700 font-normal text-[18px]">
            Here are the last-minute flight deals with the lowest prices. Act
            fast – they all depart within the next three months.
          </span>
        </div>
        <div className="sm:w-[600px] 1sm:w-[680px] 1md:w-[830px] lg:w-[950px] xl:w-[1200px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto ">
          {Object.keys(flightCards).map((key) => {
            const card = flightCards[key];
            return <FlightCards card={card} key={key} />;
          })}
        </div>
        <div className="flex justify-center items-center pt-12">
          <div className="bg-white w-fit  text-gray-800 p-8 rounded-lg">
            <div className="max-w-[1150px] text-center pb-8">
              <h3 className="text-3xl font-semibold mb-2">
                Looking for what SkyClarity has to offer?
              </h3>
              <p className="text-gray-600">
                It’s easy around here. 100 million travelers use us as their
                go-to tool, comparing flight deals and offers from more than
                1,200 airlines and travel providers. With so many options to
                choose from in one place, you can say hello to savings and
                goodbye to stress – here’s how.
              </p>
            </div>
            <div className="flex justify-between space-x-20">
              <div className="text-center max-w-xs">
                <img
                  src={planeImg}
                  alt="Hotel deals"
                  className="mx-auto mb-4 w-32 h-24"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Travel with confidence
                </h3>
                <p className="text-gray-600">
                  The cheapest flight deals. No hidden fees. No funny business.
                  With us, the price you see when you search is what you’ll pay.
                </p>
              </div>

              <div className="text-center max-w-xs">
                <img
                  src={clockImg}
                  alt="Up-to-date pricing"
                  className="mx-auto mb-4 w-28 h-24"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Book when it's best with Price Alerts
                </h3>
                <p className="text-gray-600">
                  Found your flight, but not quite ready to book? Set up Price
                  Alerts and we’ll let you know when your flight price goes up
                  or down.
                </p>
              </div>

              <div className="text-center max-w-xs">
                <img
                  src={handshakeImg}
                  alt="Precise searching"
                  className="mx-auto mb-4 w-36 h-24"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Simplify Your Booking Experience
                </h3>
                <p className="text-gray-600">
                  Enjoy your memorable moments with millions of favorable
                  flights and accommodations
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <FAQ faqs={faqs.flight} />
        </div>
      </div>
      {/* {flights ? (
        <div className="absolute top-[900px]">
          <Flights flights={flights} />
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default Home;
