import React from "react";

const CarFilter = ({
  seatFilter,
  setSeatFilter,
  pickupFilter,
  setPickupFilter,
  policiesFilter,
  setPoliciesFilter,
  transmissionFilter,
  setTransmissionFilter,
  classFilter,
  setClassFilter,
  featuresFilter,
  setFeaturesFilter,
  vendorsFilter,
  setVendorsFilter,
  carsInfo,
}) => {
  const arrayEquals = (a, b) => {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  };

  const handleSeatChange = (newFilter) => {
    if (seatFilter.includes(newFilter[0])) {
      setSeatFilter(seatFilter.filter((item) => item !== newFilter[0])); // Remove if exists
    } else {
      setSeatFilter([...seatFilter, ...newFilter]); // Add if not exists
    }
  };
  const handlePickupChange = (event) => {
    const { value, checked } = event.target;
    setPickupFilter((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handlePoliciesChange = (event) => {
    const { value, checked } = event.target;
    setPoliciesFilter((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleTransmissionChange = (event) => {
    const { value, checked } = event.target;
    setTransmissionFilter((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleClassChange = (event) => {
    const { value, checked } = event.target;
    setClassFilter((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleFeaturesChange = (event) => {
    const { value, checked } = event.target;
    setFeaturesFilter((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };
  const handleVendorsChange = (event) => {
    const { value, checked } = event.target;
    setVendorsFilter((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const uniqueVendors = new Set(carsInfo?.data.quotes.map((car) => car.vndr));

  return (
    <div className="w-[270px] p-4  bg-white rounded-sm text-gray-700">
      <div className="border-b pb-3 mb-2">
        <h2 className="text-lg font-semibold">Seats</h2>
        <div className="mt-2 space-x-2">
          <button
            className={`px-6 py-1 border rounded ${
              seatFilter.includes("1-4") ? "bg-gray-200" : ""
            }`}
            onClick={() => handleSeatChange(["1-4"])}
          >
            1-4
          </button>
          <button
            className={`px-6 py-1 border rounded ${
              seatFilter.includes("5-6") ? "bg-gray-200" : ""
            }`}
            onClick={() => handleSeatChange(["5-6"])}
          >
            5-6
          </button>
          <button
            className={`px-6 py-1 border rounded ${
              seatFilter.includes("7+") ? "bg-gray-200" : ""
            }`}
            onClick={() => handleSeatChange(["7+"])}
          >
            7+
          </button>
        </div>
      </div>

      {/* <div className="border-b pb-3 mb-2">
        <h2 className="text-lg font-semibold">Pickup</h2>
        <div className="mt-2 space-y-2">
          <label className="block">
            <input
              type="checkbox"
              className="mr-2"
              value="Airport terminal"
              onChange={handlePickupChange}
              checked={pickupFilter.includes("Airport terminal")}
            />
            Airport terminal
          </label>
          <label className="block">
            <input
              type="checkbox"
              className="mr-2"
              value="Meet and greet"
              onChange={handlePickupChange}
              checked={pickupFilter.includes("Meet and greet")}
            />
            Meet and greet
          </label>
          <label className="block">
            <input
              type="checkbox"
              className="mr-2"
              value="Free shuttle bus"
              onChange={handlePickupChange}
              checked={pickupFilter.includes("Free shuttle bus")}
            />
            Free shuttle bus
          </label>
        </div>
      </div> */}

      <div className="border-b pb-3 mb-2">
        <h2 className="text-lg font-semibold">Policies</h2>
        <div className="mt-2 space-y-2">
          <label className="block">
            <input
              type="checkbox"
              className="mr-2"
              value="Unlimited mileage"
              onChange={handlePoliciesChange}
              checked={policiesFilter.includes("Unlimited mileage")}
            />
            Unlimited mileage
          </label>
          <label className="block">
            <input
              type="checkbox"
              className="mr-2"
              value="Free cancellation – up to 48 hours"
              onChange={handlePoliciesChange}
              checked={policiesFilter.includes(
                "Free cancellation – up to 48 hours"
              )}
            />
            Free cancellation – up to 48 hours
          </label>
        </div>
      </div>

      <div className="border-b pb-3 mb-2">
        <h2 className="text-lg font-semibold">Transmission</h2>
        <div className="mt-2 space-y-2">
          <label className="block">
            <input
              type="checkbox"
              className="mr-2"
              value="Automatic"
              onChange={handleTransmissionChange}
              checked={transmissionFilter.includes("Automatic")}
            />
            Automatic
          </label>
          <label className="block">
            <input
              type="checkbox"
              className="mr-2"
              value="Manual"
              onChange={handleTransmissionChange}
              checked={transmissionFilter.includes("Manual")}
            />
            Manual
          </label>
        </div>
      </div>

      <div className="border-b pb-3 mb-2">
        <h2 className="text-lg font-semibold">Class</h2>
        <div className="mt-2 space-y-2">
          <label className="block">
            <input
              type="checkbox"
              className="mr-2"
              value="premium"
              onChange={handleClassChange}
              checked={classFilter.includes("premium")}
            />
            Premium
          </label>
          <label className="block">
            <input
              type="checkbox"
              className="mr-2"
              value="compact"
              onChange={handleClassChange}
              checked={classFilter.includes("compact")}
            />
            Compact
          </label>
          <label className="block">
            <input
              type="checkbox"
              className="mr-2"
              value="intermediate"
              onChange={handleClassChange}
              checked={classFilter.includes("intermediate")}
            />
            Intermediate
          </label>
          <label className="block">
            <input
              type="checkbox"
              className="mr-2"
              value="economy"
              onChange={handleClassChange}
              checked={classFilter.includes("economy")}
            />
            Economy
          </label>
        </div>
      </div>
      <div className="border-b pb-3 mb-2">
        <h2 className="text-lg font-semibold">Features</h2>
        <div className="mt-2 space-y-2">
          <label className="block">
            <input
              type="checkbox"
              className="mr-2"
              value="A/C"
              onChange={handleFeaturesChange}
              checked={featuresFilter.includes("A/C")}
            />
            A/C
          </label>
          <label className="block">
            <input
              type="checkbox"
              className="mr-2"
              value="Free roadside assistance"
              onChange={handleFeaturesChange}
              checked={featuresFilter.includes("Free roadside assistance")}
            />
            Free roadside assistance
          </label>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Suppliers</h2>
        {[...uniqueVendors].map((vendor, index) => (
          <div key={index} className="mt-2 space-y-2">
            <label className="block">
              <input
                type="checkbox"
                className="mr-2"
                value={vendor}
                onChange={handleVendorsChange}
                checked={vendorsFilter.includes(vendor)}
              />
              {vendor}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarFilter;
