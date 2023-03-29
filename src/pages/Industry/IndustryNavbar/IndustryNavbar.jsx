import React from "react";

const IndustryNavbar = () => {
  return (
    <div className="w-full h-24  bg-img-banner bg-no-repeat bg-cover flex flex-col justify-center shadow-navbar-shadow">
      <ul className="flex h-full items-center  flex-row justify-between gap-10  mx-10   md:mx-32 ">
        <li className="flex items-center h-full p-3 text-white font-medium text-2xl border-b-8 hover:border-b-8">Automobile</li>
        <li className="flex items-center h-full p-3 text-white font-medium text-2xl hover:border-b-8">Manufacturing</li>
        <li className="flex items-center h-full p-3 text-white font-medium text-2xl hover:border-b-8">Retail</li>
        <li className="flex items-center h-full p-3 text-white font-medium text-2xl hover:border-b-8 ">Financial Services</li>
        <li className="flex items-center h-full p-3 text-white font-medium text-2xl hover:border-b-8">Government</li>
        <li className="flex items-center h-full p-3 text-white font-medium text-2xl hover:border-b-8">Horizontal</li>
        <li className="flex items-center h-full p-3 text-white font-medium text-2xl hover:border-b-8">Other Industries</li> 
      </ul>
    </div>
  );
};

export default IndustryNavbar;
