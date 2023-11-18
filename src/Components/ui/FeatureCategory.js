import { useRouter } from 'next/router';
import React from 'react';
import { BsCpuFill, BsFillMotherboardFill, BsThreeDots } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { ImPowerCord } from "react-icons/im";
import { MdStorage } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
const FeatureCategory = () => {
    const router = useRouter();
    return (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4  mx-auto max-w-5xl mt-10">
         <div
          onClick={() => router.push("/monitor")}
          className=" product-card border border-gray-300 max-w-[110px] w-full h-24 p-2 hover:shadow-lg hover:text-emerald-300 shadow-gray-400 flex flex-col justify-center items-center rounded-md transition-all duration-200 cursor-pointer mx-auto"
        >
          <FiMonitor size={40} />
          <p className="mt-1 rotate-">Monitor</p>
        </div>
        <div
          onClick={() => router.push("/cpu")}
          className=" product-card border  border-gray-300 max-w-[110px] w-full h-24 p-2 hover:shadow-lg hover:text-emerald-300 shadow-gray-400 flex flex-col justify-center items-center rounded-md transition-all duration-200 cursor-pointer mx-auto"
        >
          <BsCpuFill size={40} />
          <p className="mt-1">Processor</p>
        </div>
        <div
          onClick={() => router.push("/motherboard")}
          className=" product-card border border-gray-300 max-w-[110px] w-full h-24 p-2 hover:shadow-lg hover:hover:text-emerald-300 shadow-gray-400 flex flex-col justify-center items-center rounded-md transition-all duration-200 cursor-pointer mx-auto"
        >
          <BsFillMotherboardFill size={40} />
          <p className="mt-1">Motherboard</p>
        </div>
        <div
          onClick={() => router.push("/ram")}
          className=" product-card border border-gray-300 max-w-[110px] w-full h-24 p-2 hover:shadow-lg hover:text-emerald-300 shadow-gray-400 flex flex-col justify-center items-center rounded-md transition-all duration-200 cursor-pointer mx-auto"
        >
          <CgSmartphoneRam size={40} />
          <p className="mt-1">Ram</p>
        </div>
        <div
          onClick={() => router.push("/psu")}
          className=" product-card border border-gray-300 max-w-[110px] w-full h-24 p-2 hover:shadow-lg hover:text-emerald-300 shadow-gray-400 flex flex-col justify-center items-center rounded-md transition-all duration-200 cursor-pointer mx-auto"
        >
          <ImPowerCord size={40} />
          <p className="mt-1">PowerSupply</p>
        </div>
        <div
          onClick={() => router.push("/storage")}
          className=" product-card border border-gray-300 max-w-[110px] w-full h-24 p-2 hover:shadow-lg hover:text-emerald-300 shadow-gray-400 flex flex-col justify-center items-center rounded-md transition-all duration-200 cursor-pointer mx-auto"
        >
          <MdStorage size={40} />
          <p className="mt-1">Storage</p>
        </div>
       
        <div
          onClick={() => router.push("/others")}
          className=" product-card border   border-gray-300 max-w-[110px] w-full h-24 p-2 hover:shadow-lg
          hover:text-emerald-300  flex
             justify-center items-center rounded-md
             transition-all duration-200 cursor-pointer mx-auto"
        >
          <BsThreeDots className="rotate-90" size={40} />
          <p className="mt-1">Others</p>
        </div>
      </div>
   
    );
};

export default FeatureCategory;