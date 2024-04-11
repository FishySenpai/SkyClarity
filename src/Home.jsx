import React, { useState } from "react";

const Home = () => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [fromId, setFromId] = useState();
  const [toId, setToId] = useState();
  const fetchLocation = async (locationType, location) => {
    const url = `https://skyscanner80.p.rapidapi.com/api/v1/flights/auto-complete?query=${location}&market=US&locale=en-US`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "325a7f72damshf16ffcb2c3ed7bep1f566djsn006db2e1a65a",
        "X-RapidAPI-Host": "skyscanner80.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      console.log(result);

      if (locationType === "from") {
        setFromId(result.data[0].id);
        console.log(fromId);
      } else if (locationType === "to") {
        setToId(result.data[0].id);
        console.log(toId);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const fetchFlights = async () => {
    fetchLocation(from);
    fetchLocation(to);
    if (from && to) {
      const url = `https://skyscanner80.p.rapidapi.com/api/v1/flights/search-one-way?fromId=${fromId}&toId=${toId}&departDate=2024-04-20&adults=1&currency=USD&market=US&locale=en-US`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "325a7f72damshf16ffcb2c3ed7bep1f566djsn006db2e1a65a",
          "X-RapidAPI-Host": "skyscanner80.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className=" text-red-500">
      <div>
        <div className="flex flex-col space-y-12 w-[200px]">
          <div className="flex flex-row">
            <label htmlFor="text">From:</label>
            <input
              type="search"
              placeholder="From..."
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="flex flex-row">
            <label htmlFor="text">To:</label>
            <input
              type="search"
              placeholder="To..."
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-12">
        <button onClick={() => fetchLocation("from", from)}>Click</button>
        <button onClick={() => fetchLocation("to", to)}>
          Click for Flight
        </button>
        <button onClick={fetchFlights}>get flight</button>
      </div>
    </div>
  );
};

export default Home;
