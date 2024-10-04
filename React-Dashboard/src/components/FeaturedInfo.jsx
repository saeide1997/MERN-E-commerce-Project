import { ArrowDownward } from "@mui/icons-material";
import React from "react";

const FeaturedInfo = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="flex-1 h-[150px] mx-5 p-7 shadow">
        <span className="text-2xl">درآمد</span>
        <div className="my-4 items-center flex">
          <span className="text-3xl">$25411</span>
          <span className="flex items-center mr-5">
            11+ <ArrowDownward className="text-sm ml-1 text-green-500"/>
          </span>
        </div>
      </div>
      <div className="flex-1 h-[150px] mx-5 p-7 shadow">
        <span className="text-2xl">درآمد</span>
        <div className="my-4 items-center flex">
          <span className="text-3xl ">$25411</span>
          <span className="flex items-center mr-5">
            11+ <ArrowDownward className="text-sm ml-1 text-green-500"/>
          </span>
        </div>
      </div>
      <div className="flex-1 h-[150px] mx-5 p-7 shadow">
        <span className="text-2xl">درآمد</span>
        <div className="my-4 items-center flex">
          <span className="text-3xl ">$25411</span>
          <span className="flex items-center mr-5">
            11- <ArrowDownward className="text-sm ml-1 text-red-500"/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
