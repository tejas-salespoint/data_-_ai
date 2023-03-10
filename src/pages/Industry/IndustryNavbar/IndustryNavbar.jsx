import React from "react";

const IndustryNavbar = () => {
  return (
    <div className="w-full  bg-img-banner bg-no-repeat bg-cover flex flex-col justify-center">
      <ul className="flex justify-around gap-10 p-10">
        <li className="text-white font-medium text-2xl">Healthcare</li>
        <li className="text-white font-medium text-2xl">Manufacturing</li>
        <li className="text-white font-medium text-2xl">Retail</li>
        <li className="text-white font-medium text-2xl">Financial Services</li>
        <li className="text-white font-medium text-2xl">Government</li>
        <li className="text-white font-medium text-2xl">Horizontal</li>
        <li className="text-white font-medium text-2xl">Media</li>
      </ul>
    </div>
  );
};

export default IndustryNavbar;
