import React, {useState} from "react";

const CarFilter = () => {


  return (
    <div className="w-[270px] p-4 bg-white rounded-sm mt-6 text-gray-700">
      <div className="border-b pb-3 mb-2">
          <h2 className="text-lg font-semibold">Seats</h2>
          <div className="mt-2 space-x-2">
            <button className="px-6 py-1 border rounded">1-4</button>
            <button className=" px-6 py-1 border rounded">5-6</button>
            <button className="px-6 py-1 border rounded">7+</button>
          </div>
      </div>

      <div className="border-b pb-3 mb-2">
          <h2 className="text-lg font-semibold">Pickup</h2>
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
      </div>
      <div className="border-b pb-3 mb-2">
          <h2 className="text-lg font-semibold">Policies</h2>
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
      </div>
      <div className="border-b pb-3 mb-2">
          <h2 className="text-lg font-semibold">Transmission</h2>
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
      </div>
      <div className="border-b pb-3 mb-2">
          <h2 className="text-lg font-semibold">Low-emission vehicles</h2>
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
      </div>
      <div>
          <h2 className="text-lg font-semibold">Features</h2>
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
      </div>
    </div>
  );
};

export default CarFilter;
