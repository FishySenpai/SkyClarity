import React from "react"

const HotelsLoading = () => {
  return (
    <>
      <div className="hidden xl:block">
        <div className="mx-12 px-6 w-[300px] bg-white rounded-lg default-font text-gray-700 text-sm divide-y-2 divide-slate-300">
          {Array(5)
            .fill(0)
            .map((_, starIndex) => (
              <div className="pt-4 pb-2">
                <div className="flex flex-row relative pt-2 w-3/4 bg-gray-200 animate-pulse h-5 mb-3"></div>
                <div className="mb-3 flex relative ">
                  <div className=" w-[30px] mr-3 bg-gray-200 animate-pulse h-5 "></div>
                  <div className=" w-1/2 mr-3 bg-gray-200 animate-pulse h-5"></div>
                  <div className=" w-[45px] bg-gray-200 animate-pulse h-5 absolute right-0"></div>
                </div>
                <div className="mb-3 flex relative ">
                  <div className=" w-[30px] mr-3 bg-gray-200 animate-pulse h-5 "></div>
                  <div className=" w-1/3 mr-3 bg-gray-200 animate-pulse h-5"></div>
                  <div className=" w-[45px] bg-gray-200 animate-pulse h-5 absolute right-0"></div>
                </div>
                <div className="mb-3 flex relative ">
                  <div className=" w-[30px] mr-3 bg-gray-200 animate-pulse h-5 "></div>
                  <div className=" w-1/2 mr-3 bg-gray-200 animate-pulse h-5"></div>
                  <div className=" w-[45px] bg-gray-200 animate-pulse h-5 absolute right-0"></div>
                </div>
                <div className="mb-3 flex relative ">
                  <div className=" w-[30px] mr-3 bg-gray-200 animate-pulse h-5 "></div>
                  <div className=" w-1/3 mr-3 bg-gray-200 animate-pulse h-5"></div>
                  <div className=" w-[45px] bg-gray-200 animate-pulse h-5 absolute right-0"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col pt-[150px] 1lg:pt-0 w-full 1sm:w-fit">
        <div>
          {Array(5)
            .fill(0)
            .map((_, starIndex) => (
              <div className="bg-white rounded-xl text-gray-700 min-w-full 1sm:w-[625px] 1md:w-[880px] 1lg:w-[925px] mb-2 xl:mr-12 py-4 flex flex-col 1md:flex-row divide-gray-200">
                <div className="flex flex-col 1md:flex-row ">
                  <div className="px-3 relative">
                    <div className="relative w-full 1sm:w-[600px] 1md:w-[350px] h-[300px] 1sm:h-[350px] 1md:h-[250px] group">
                      <div className=" w-full 1sm:w-[600px] 1md:w-[350px] h-[300px] 1sm:h-[350px] 1md:h-[250px] rounded transition-opacity duration-1000 bg-gray-200 animate-pulse" />
                    </div>
                  </div>
                </div>
                <div className="w-full  flex flex-col 2sm:flex-row  divide-x-[1px] pt-2">
                  <div className="pl-4 pr-4 w-full 1sm:w-[1000px] 1md:w-[550px] 1lg:w-[630px]">
                    <div className="pr-3 font-semibold text-lg bg-gray-200 animate-pulse h-6 w-full"></div>
                    <div className="flex flex-row pt-2 bg-gray-200 animate-pulse mt-4 w-[35%] h-5"></div>
                    <div className="pt-2 text-sm bg-gray-200 animate-pulse mt-3 w-[85%] h-3"></div>
                    <div className="flex flex-row space-x-2 pt-1 bg-gray-200 animate-pulse mt-4 w-[55%] h-4"></div>
                    <div className="flex flex-row space-x-2 pt-1 bg-gray-200 animate-pulse mt-4 w-full h-4"></div>
                    <div className="flex flex-row space-x-2 pt-1 bg-gray-200 animate-pulse mt-3 w-full h-5"></div>
                    <div className="flex flex-row space-x-2 pt-1 bg-gray-200 animate-pulse mt-3 w-full h-5"></div>
                  </div>
                  <div className="pl-4  1md:pt-12 w-full flex flex-col pr-4 pt-2 justify-end items-end sm:flex-initial sm:pr-0 sm:pt-0 sm:justify-start sm:items-start">
                    <div className="flex flex-row bg-gray-200 animate-pulse mt-2 w-[120px] h-5"></div>
                    <div className="flex flex-row pt-2 bg-gray-200 animate-pulse w-[50px] h-6 mt-8"></div>

                    <div className="text-2xl font-bold  mt-3 bg-gray-200 animate-pulse w-[140px] h-3"></div>
                    <div className="pt-2 hidden 2sm:block bg-gray-200 animate-pulse mt-2 w-[160px] h-3"></div>
                    <div className="text-sm hidden 2sm:block bg-gray-200 animate-pulse mt-2 w-[90px] h-5"></div>
                  </div>
                </div>{" "}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default HotelsLoading