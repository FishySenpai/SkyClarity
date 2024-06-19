import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Flights/Home";
import Navbar from "./components/Navbar";
import "./App.css"
import Hotels from "./components/Hotels/Hotels";
import HotelDetails from "./components/Hotels/HotelDetails";
import FlightDetails from "./components/Flights/FlightDetails";
import HotelsHome from "./components/Hotels/HotelsHome";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelsHome />} />
        <Route path="/hotels/hotel/:id" element={<HotelDetails />} />
        <Route path="/flights/flight" element={<FlightDetails />} />
      </Routes>
    </div>
  );
}

export default App;
