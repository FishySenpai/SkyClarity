import React from "react";

const FlightDetails = () => {
  const FetchFlightDetails = async () => {
    const url =
      "https://skyscanner80.p.rapidapi.com/api/v1/flights/detail?itineraryId=12569-2404200335--32119-1-12712-2404201400&token=eyJhIjoiMSIsImMiOjAsImkiOjAsImNjIjoiZWNvbm9teSIsIm8iOiJJU0IiLCJkIjoiTllDQSIsImQxIjoiMjAyNC0wNC0yMCJ9&currency=USD&market=US&locale=en-US";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "325a7f72damshf16ffcb2c3ed7bep1f566djsn006db2e1a65a",
        "x-rapidapi-host": "skyscanner80.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
//   FetchFlightDetails();
const options = [
  { name: "Mytrip", price: "Rs 296,499", reviews: 1947 },
  { name: "Trip.com", price: "Rs 301,182", reviews: 1611 },
  { name: "Kiwi.com", price: "Rs 347,273", reviews: 734 },
  { name: "Emirates", price: "Rs 383,389", reviews: 711 },
  { name: "Bravofly", price: "Rs 398,013", reviews: 604 },
];

  return (
    <div className="bg-white">
      <header className="bg-blue-900 text-white p-4 ">
        <div className="container mx-auto flex justify-between items-center h-[180px]">
          <a href="#" className="text-white">
            Back
          </a>
          <div className="text-center">
            <h1 className="text-2xl">New York</h1>
            <p>1 adult • One way • Economy class</p>
          </div>
          <div></div>
        </div>
      </header>
      <div className="flex flex-row">
        <div className="p-4 w-[600px]">
          <h2 className="mb-2">Book your ticket</h2>
          <button className="mb-4 p-2 border">Read before booking</button>
          <ul>
            {options.map((option) => (
              <li
                key={option.name}
                className="flex justify-between items-center mb-4 p-2 border"
              >
                <div>
                  <p>{option.name}</p>
                  <p className="text-gray-500">{option.reviews} reviews</p>
                </div>
                <div>
                  <p>{option.price}</p>
                  <button className="bg-blue-900 text-white p-2">Select</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 border-l">
          <h2 className="mb-2">Flight details</h2>
          <div>
            <p>Outbound Tue, 18 Jun 2024</p>
            <div className="flex items-center mb-2">
              <img
                src="https://logos-download.com/wp-content/uploads/2016/02/Emirates_logo_transparent.png"
                alt="Emirates"
                className="h-8"
              />
              <div className="ml-2">
                <p>03:05 ISB → 14:25 JFK</p>
                <p>1 stop DXB</p>
              </div>
            </div>
            <div className="border p-2 mb-2">
              <p>Emirates EK615</p>
              <p>03:05 ISB Islamabad → 05:25 DXB Dubai</p>
              <p>3h 20</p>
              <p className="text-red-600">Long wait</p>
              <p>Emirates EK201</p>
              <p>08:30 DXB Dubai → 14:25 JFK New York John F. Kennedy</p>
              <p>13h 55</p>
            </div>
            <p>Journey duration: 20h 20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
