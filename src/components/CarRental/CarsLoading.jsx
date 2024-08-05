import React from "react";

const CarsLoading = () => {
  return (
    <div className="flex flex-row absolute top-[300px] justify-center mx-auto bg-gray-100 pt-12 rounded-t-3xl w-full">
      <div className="hidden lg:block mt-6">
        <div className="mx-12 px-6 w-[300px] bg-white rounded-lg default-font text-gray-700 text-sm divide-y-2 divide-slate-300">
          {Array(5)
            .fill(0)
            .map((_, starIndex) => (
              <div className="pt-4 pb-2">
                <div className="flex flex-row relative pt-2 w-3/4 bg-gray-200 animate-pulse h-5 mb-3"></div>
                <div className="mb-3 flex relative ">
                  <div className=" w-[30px] mr-3 bg-gray-200 animate-pulse h-5 "></div>
                  <div className=" w-1/2 mr-3 bg-gray-200 animate-pulse h-5"></div>
                </div>
                <div className="mb-3 flex relative ">
                  <div className=" w-[30px] mr-3 bg-gray-200 animate-pulse h-5 "></div>
                  <div className=" w-1/3 mr-3 bg-gray-200 animate-pulse h-5"></div>
                </div>
                <div className="mb-3 flex relative ">
                  <div className=" w-[30px] mr-3 bg-gray-200 animate-pulse h-5 "></div>
                  <div className=" w-1/2 mr-3 bg-gray-200 animate-pulse h-5"></div>
                </div>
                <div className="mb-3 flex relative ">
                  <div className=" w-[30px] mr-3 bg-gray-200 animate-pulse h-5 "></div>
                  <div className=" w-1/3 mr-3 bg-gray-200 animate-pulse h-5"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col mt-6 pt-[100px] lg:pt-0 w-full 1sm:w-fit">
        <div>
          {Array(5)
            .fill(0)
            .map((_, starIndex) => (
              <div className="bg-white rounded text-gray-700 w-full 1sm:w-[670px] mb-2 flex flex-col divide-gray-400 ">
                <div className="flex flex-col 1sm:flex-row divide-y-2 1sm:divide-y-0 1sm:divide-x-2 divide-gray-400 w-full 1sm:h-[196px]">
                  <div className="w-full 1sm:w-[480px] pb-12 1sm:pb-0 py-4 ">
                    <div className="flex flex-col ">
                      <div className="flex flex-col px-4">
                        <div className="pr-3 text-lg font-semibold bg-gray-200 animate-pulse h-6 w-[50%]"></div>
                        <div className="flex flex-row  space-x-2 text-sm relative">
                          <div className="bg-gray-200 animate-pulse mt-4 w-[45%] h-4"></div>
                          <div className="absolute right-0 -top-8 h-[35px] w-[70px] bg-gray-200 animate-pulse" />
                        </div>
                      </div>
                      <div className="flex flex-row relative">
                        <div className="flex flex-col">
                          <div className="flex flex-row space-x-2 ml-4 pt-4 bg-gray-200 animate-pulse mt-4 w-[85%] h-5 "></div>
                          <div className="flex flex-row bg-gray-200 animate-pulse h-6 ml-4 mt-2 w-[90px] p-1"></div>
                        </div>
                        <div className="absolute -top-3 right-4 bg-gray-200 h-[118px] w-[181px]">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 text-gray-950 flex flex-col pr-4 pt-2 justify-end items-end 1sm:flex-initial 1sm:pr-0 1sm:pt-0 1sm:justify-start 1sm:items-start">
                    <div className="flex flex-row bg-gray-200 animate-pulse w-[50px] h-5 mt-4"></div>
                    <div className="text-2xl font-bold mb-2 2sm:mb-0 mt-6 bg-gray-200 animate-pulse w-[100px] h-5"></div>
                    <div className="pt-2 hidden 2sm:block bg-gray-200 animate-pulse mt-4 w-[150px] h-4"></div>
                    <div className="text-sm hidden 2sm:block bg-gray-200 animate-pulse mb-4 mt-4 1sm:mt-8 w-[120px] h-5"></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="hidden 2xl:block">
        <div className="p-8 pt-4 ">
          <h2 className=" mb-4 bg-gray-200 animate-pulse h-6 w-[200px]"></h2>
          {Array(2)
            .fill(0)
            .map((_, starIndex) => (
              <div className="bg-white rounded-lg mb-4 w-fit">
                <div className="w-[363px] h-[150px] rounded-t-lg bg-gray-200 " />
                <div className="p-3 pb-0">
                  <h3 className="text-lg font-semibold bg-gray-200 animate-pulse w-full h-14"></h3>
                  <p className="text-gray-600 bg-gray-200 animate-pulse w-full"></p>
                </div>
                <div className="flex justify-between items-center mt-2 p-3 pt-2 border-t-[2px] border-gray-200 ">
                  <p className="text-gray-800 flex flex-col bg-gray-200 animate-pulse w-[120px] h-10"></p>
                  <button className=" text-gray-800 py-2 px-4 rounded-lg font-semibold bg-gray-200 animate-pulse w-[120px] h-10"></button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CarsLoading;
