import React from "react";
import { Link } from "react-router-dom";

const IndustryNavbar = () => {
  return (
    <div className="w-full h-24  bg-img-banner bg-no-repeat bg-cover flex flex-col justify-center shadow-navbar-shadow">
      <ul className="flex h-full items-center  flex-row justify-between gap-10  mx-10   md:mx-32 ">
        <li className="flex items-center h-full p-3 text-white font-bold text-2xl border-b-8 hover:border-b-8">
          Automotive
        </li>
        <li className="flex items-center h-full p-3 text-white font-medium text-2xl hover:border-b-8 ">
          Financial Services
        </li>
        <li className="flex items-center h-full p-3 text-white font-medium text-2xl hover:border-b-8">
          Government
        </li>
        <li className="flex items-center h-full p-3 text-white font-medium text-2xl hover:border-b-8">
          Horizontal
        </li>
        <li className="flex items-center h-full p-3 text-white font-medium text-2xl hover:border-b-8">
          Manufacturing
        </li>
        <li className="flex items-center h-full p-3 text-white font-medium text-2xl hover:border-b-8">
          Retail
        </li>
        <Link to={"/all_industries"}>
          <li className="flex items-center p-3 px-5 rounded-full  bg-white text-blue font-medium text-2xl ">
            All Industries
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default IndustryNavbar;
