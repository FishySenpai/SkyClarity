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
  const [flightCount, setFlightCount] = useState(1);
  return (
    <div className=" text-white default-font relative bg-gray-50  ">
      <img
        src={flightsImg}
        className="absolute inset-0 w-full h-[678px] object-cover "
      />
      <div className="absolute top-36 lg:top-52 w-full flex flex-col items-center z-50">
        <div className="w-fit flex flex-col items-center">
          <div className="h-[160px] w-full 1sm:w-fit relative ">
            <div className="text-3xl 2sm:text-4xl 1lg:text-5xl pb-3 text-white font-bold text-left w-[95%]">
              Find cheap flight deals
            </div>
            <FlightsSearch
              flight={flights}
              setFlights={setFlights}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              flightCount={flightCount}
              setFlightCount={setFlightCount}
            />
          </div>
        </div>
      </div>
      <div
        className={`relative bg-gray-100 pb-24 rounded-t-3xl z-10  ${
          selectedOption === "multi-city"
            ? flightCount > 1
              ? "pt-[200px]"
              : "pt-[50px]"
            : ""
        } ${
          selectedOption === "multi-city"
            ? "top-[650px]  2sm:pt-0"
            : "top-[600px] "
        }`}
      >
        <div
          className="text-3xl pb-3 text-gray-800 font-bold pt-12 pl-6 sm:pl-0 sm:w-[600px] 1sm:w-[680px] 1md:w-[830px] lg:w-[950px] xl:w-[1200px] flex flex-col 
        mx-auto"
        >
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
        <div className="flex flex-row justify-center items-center pt-12 sm:w-[600px] 1sm:w-[680px] 1md:w-[830px] lg:w-[950px] xl:w-[1200px] mx-auto">
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
            <div className="flex flex-col 1md:flex-row justify-center items-center 1md:justify-between space-y-8 1md:space-y-8 1md:space-x-20">
              <div className="text-center 1md:max-w-xs ">
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

              <div className="text-center 1md:max-w-xs">
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

              <div className="text-center 1md:max-w-xs">
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
        <div className="sm:w-[600px] 1sm:w-[680px] 1md:w-[830px] lg:w-[950px] xl:w-[1200px] mx-auto">
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
