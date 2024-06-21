import React, {useState} from "react";

const CarFilter = () => {
  const [seatsOpen, setSeatsOpen] = useState(true);
  const [pickupOpen, setPickupOpen] = useState(true);
  const [policiesOpen, setPoliciesOpen] = useState(true);
  const [transmissionOpen, setTransmissionOpen] = useState(true);
  const [lowEmissionOpen, setLowEmissionOpen] = useState(true);
  const [featuresOpen, setFeaturesOpen] = useState(true);

  const toggleSection = (section) => {
    switch (section) {
      case "seats":
        setSeatsOpen(!seatsOpen);
        break;
      case "pickup":
        setPickupOpen(!pickupOpen);
        break;
      case "policies":
        setPoliciesOpen(!policiesOpen);
        break;
      case "transmission":
        setTransmissionOpen(!transmissionOpen);
        break;
      case "lowEmission":
        setLowEmissionOpen(!lowEmissionOpen);
        break;
      case "features":
        setFeaturesOpen(!featuresOpen);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-[270px] p-4 bg-white rounded-sm mt-6 text-gray-700">
      <div className="border-b pb-2 mb-2">
        <button
          onClick={() => toggleSection("seats")}
          className="w-full text-left"
        >
          <h2 className="text-lg font-semibold">Seats</h2>
        </button>
        {seatsOpen && (
          <div className="mt-2 space-x-2">
            <button className="px-5 py-1 border rounded">1-4</button>
            <button className=" px-5 py-1 border rounded">5-6</button>
            <button className="px-5 py-1 border rounded">7+</button>
          </div>
        )}
      </div>

      <div className="border-b pb-2 mb-2">
        <button
          onClick={() => toggleSection("pickup")}
          className="w-full text-left"
        >
          <h2 className="text-lg font-semibold">Pickup</h2>
        </button>
        {pickupOpen && (
          <div className="mt-2 space-y-2">
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Airport terminal
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Meet and greet
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Free shuttle bus
            </label>
          </div>
        )}
      </div>

      <div className="border-b pb-2 mb-2">
        <button
          onClick={() => toggleSection("policies")}
          className="w-full text-left"
        >
          <h2 className="text-lg font-semibold">Policies</h2>
        </button>
        {policiesOpen && (
          <div className="mt-2 space-y-2">
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Unlimited mileage
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Free cancellation – up to 48 hours
            </label>
          </div>
        )}
      </div>

      <div className="border-b pb-2 mb-2">
        <button
          onClick={() => toggleSection("transmission")}
          className="w-full text-left"
        >
          <h2 className="text-lg font-semibold">Transmission</h2>
        </button>
        {transmissionOpen && (
          <div className="mt-2 space-y-2">
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Automatic
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Manual
            </label>
          </div>
        )}
      </div>

      <div className="border-b pb-2 mb-2">
        <button
          onClick={() => toggleSection("lowEmission")}
          className="w-full text-left"
        >
          <h2 className="text-lg font-semibold">Low-emission vehicles</h2>
        </button>
        {lowEmissionOpen && (
          <div className="mt-2 space-y-2">
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Electric
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Hybrid
            </label>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => toggleSection("features")}
          className="w-full text-left"
        >
          <h2 className="text-lg font-semibold">Features</h2>
        </button>
        {featuresOpen && (
          <div className="mt-2 space-y-2">
            <label className="block">
              <input type="checkbox" className="mr-2" />
              A/C
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />4 wheel drive
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Free roadside assistance
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarFilter;
