import react, { useState, } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Flights/Home";
import Navbar from "./components/Navbar";
import "./App.css"
import Hotels from "./components/Hotels/Hotels";
import HotelDetails from "./components/Hotels/HotelDetails";
import FlightDetails from "./components/Flights/FlightDetails";
import HotelsHome from "./components/Hotels/HotelsHome";
import CarRentalHome from "./components/CarRental/CarRentalHome";
import CarInfo from "./components/CarRental/CarInfo";
import Flights from "./components/Flights/Flights";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App relative bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelsHome />} />
        <Route
          path="/hotels/search/:destination/:destinationId/:checkIn/:checkOut"
          element={<Hotels />}
        />
        <Route path="/carhire" element={<CarRentalHome />} />
        <Route
          path="/carhire/search/:pickUp/:pickUpId/:pickDate/:dropDate"
          element={<CarInfo />}
        />
        <Route path="/hotels/hotel/:id/:price" element={<HotelDetails />} />
        <Route path="/flights/flight" element={<FlightDetails />} />
        <Route
          path="/flights/search/:fromLocation/:fromId/:toLocation/:toId/:departdate/:returndate"
          element={<Flights />}
        />
      </Routes>
      <div className="absolute right-0 left-0 -bottom-[800px]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
