import React from "react";

const FlightsLoading = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="hidden 1lg:block mx-6 xl:mr-12 px-4 py-6 space-y-3 rounded bg-white default-font text-gray-700 text-sm divide-y-2 divide-slate-300  w-[400px] mb-3 h-fit">
        <div>
          <div className="flex flex-row relative pt-2 w-full bg-gray-200 animate-pulse h-5 mb-3"></div>
          <div className="mb-3 w-1/3 bg-gray-200 animate-pulse h-5"></div>
          <div className="mb-3 w-1/3 bg-gray-200 animate-pulse h-5"></div>
          <div className="mb-3 w-1/3 bg-gray-200 animate-pulse h-5"></div>
        </div>
        <div className="pt-3">
          <div className="flex flex-row relative pt-2 w-full bg-gray-200 animate-pulse h-5 mb-3"></div>
          <div className="flex flex-row relative pt-2 w-full bg-gray-200 animate-pulse h-5 mb-3"></div>
        </div>
        <div className="pt-3">
          <div className="flex flex-row relative pt-2 w-full bg-gray-200 animate-pulse h-5 mb-3"></div>
          <div className="flex flex-row relative pt-2 w-full bg-gray-200 animate-pulse h-5 mb-3"></div>
        </div>
        <div className="pt-3">
          <div className="flex flex-row relative pt-2 w-full bg-gray-200 animate-pulse h-5 mb-3"></div>
          <div className="flex flex-row relative pt-2 w-full bg-gray-200 animate-pulse h-5 mb-3"></div>
        </div>
        <div className="pt-3">
          <div className="flex flex-row relative pt-2 w-full bg-gray-200 animate-pulse h-5 mb-3"></div>
          <div className="flex flex-row relative pt-2 w-full bg-gray-200 animate-pulse h-5 mb-3"></div>
        </div>
        <div className="pt-3">
          <div className="flex flex-row relative pt-2 w-full bg-gray-200 animate-pulse h-5 mb-3"></div>
          <div className="mb-3 w-1/3 bg-gray-200 animate-pulse h-5"></div>
          <div className="mb-3 w-1/3 bg-gray-200 animate-pulse h-5"></div>
          <div className="mb-3 w-1/3 bg-gray-200 animate-pulse h-5"></div>
        </div>
      </div>
      <div className="flex flex-col cursor-pointer w-full ">
        {Array(5)
          .fill(0)
          .map((_, starIndex) => (
            <div className=" rounded text-gray-700 w-full  1sm:w-[700px] 1md:w-[800px] lg:w-[980px] 1lg:w-[743px] xl:w-[880px] h-[184px] mb-2 bg-white  flex flex-col divide-y-2 1sm:divide-y-0 1sm:flex-row 1sm:divide-x-2 divide-gray-300">
              <div className="w-full 1sm:w-[520px] 1md:w-[640px] lg:w-[780px] 1lg:w-[590px] xl:w-[680px] pb-4 pt-2 ">
                <div className="bg-gray-200 animate-pulse w-[90%] ml-4 h-12 mt-8"></div>
                <div className="bg-gray-200 animate-pulse w-[90%] ml-4 h-12 mt-6"></div>
              </div>
              <div className="pr-5 pt-4 pb-8 1sm:pr-0 1sm:pl-8 1sm:py-8 flex flex-col items-end justify-end">
                <div className="bg-gray-200 animate-pulse w-[70px] ml-4 h-5"></div>
                <div className="bg-gray-200 animate-pulse w-[100px] ml-4 h-5 mt-2"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FlightsLoading;
