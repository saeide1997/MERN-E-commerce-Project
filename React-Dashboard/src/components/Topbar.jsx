import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import React from "react";

const Topbar = () => {
  return (
    <div className="w-full h-16 bg-white sticky top-0 z-50">
      <div className="h-full px-5 flex items-center justify-between bg-violet-100/50">
        <div className="mt-6"><span className="text-[50px] text-violet-600 cursor-pointer">SOHO.</span></div>
        <div className="flex items-center">
            <div className="relative mx-1 cursor-pointer text-gray-700">
                <NotificationsNone/>
                <span className="text-[10px] absolute top-[-3px] right-3 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                    2
                </span>
            </div>
            <div className="relative mx-1 cursor-pointer text-gray-700">
                <Language/>
                <span className="text-[10px] absolute top-[-3px] right-3 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                    
                </span>
            </div>
            <div className="relative mx-1 cursor-pointer text-gray-700">
                <Settings/>
            </div>
            </div>
      </div>
    </div>
  );
};

export default Topbar;
