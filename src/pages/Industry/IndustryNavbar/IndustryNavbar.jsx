import React from "react";

const IndustryNavbar = () => {
  return (
    <div className="w-full h-24  bg-img-banner bg-no-repeat bg-cover flex flex-col justify-center shadow-navbar-shadow">
      <ul className="flex h-full items-center  flex-row justify-between gap-10  mx-10   md:mx-32 ">
        <li className="flex items-center h-full p-3 text-white font-medium text-2xl border-b-8">Automobile</li>
        <li className="text-white font-medium text-2xl">Manufacturing</li>
        <li className="text-white font-medium text-2xl">Retail</li>
        <li className="text-white font-medium text-2xl">Financial Services</li>
        <li className="text-white font-medium text-2xl">Government</li>
        <li className="text-white font-medium text-2xl">Media</li>
        <li className="text-white font-medium text-2xl">Horizontal</li>
        <li className="text-white font-medium text-2xl">Other Industries</li> 
      </ul>
    </div>
  );
};

export default IndustryNavbar;
