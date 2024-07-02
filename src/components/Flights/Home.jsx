import React, { useState, useEffect, useRef } from "react";
import flightsJson from "./Assets/flights.json";
import Flights from "./Flights";
import Calendar from "react-calendar";
import "../Calender/Sample.css";
import flightsImg from "./Assets/flights-img.jpg";
import faqs from "../faq.json";
import useOutsideClick from "../useOutsideClick";
import MultiCity from "./MultiCity";
import FlightCards from "./FlightCards";
import FAQ from "./FAQ";
import FlightsSearch from "./FlightsSearch";
import flightCards from "./Assets/flightCards.json";
const Home = () => {
  const [flights, setFlights] = useState();
  const [selectedOption, setSelectedOption] = useState("round-trip");
  return (
    <div className=" text-white default-font relative bg-gray-50  ">
      <div>
        <img src={flightsImg} className="absolute inset-0 bg-cover bg-center" />
        <div className="absolute top-52 left-[300px]">
          <div className="text-5xl pb-3 text-white font-bold">
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
      <div
        className={`relative bg-gray-100 pb-24 rounded-t-3xl ${
          selectedOption === "multi-city" ? "top-[650px]" : "top-[600px]"
        }`}
      >
        <div className="w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto pt-12">
          {Object.keys(flightCards).map((key) => {
            const card = flightCards[key];
            return <FlightCards card={card} key={key} />;
          })}
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
