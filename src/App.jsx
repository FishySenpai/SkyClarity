import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css"
import Hotels from "./components/Hotels/Hotels";
import HotelDetails from "./components/Hotels/HotelDetails";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/hotel/:id" element={<HotelDetails />} />
      </Routes>
    </div>
  );
}

export default App;
