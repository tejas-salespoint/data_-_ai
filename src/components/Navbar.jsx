import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex text-gray-800 gap-4 items-center mx-20 shadow-navbar-shadow main-navbar-shadow">
      <div className="flex  gap-3">
        <img className="h-10 w-10" src={Logo} alt="logo" />
        <h1 className="text-3xl text-gray-500 font-medium">Microsoft</h1>
      </div>
      <div className="h-12 w-1 bg-black"></div>
      <div className="flex items-center">
        <ul className="flex gap-5 align-middle items-center ">
          <Link
            to={"/"}
            className="h-20 flex items-center border-b-8 border-blue "
          >
            <li className="text-xl  font-medium text-blue p-2 px-3">Home</li>
          </Link>
          <Link
            target="_blank"
            className="h-20 flex items-center hover:border-b-8 hover:border-blue  hover:text-blue"
            to={"https://microsoft.sharepoint.com/teams/DataAIGBBCommunity/"}
          >
            <li className="text-xl font-medium text-gray-800  p-2 px-3">
              GBB Community
            </li>
          </Link>
          <Link className="h-20 flex items-center hover:border-b-8 hover:border-blue  hover:text-blue">
            <li className="text-xl font-medium text-gray-800   p-2 px-3">
              Apps & DAI
            </li>
          </Link>
          <Link
            className="h-20 flex items-center hover:border-b-8 hover:border-blue  hover:text-blue"
            to={"industry"}
          >
            <li className="text-xl font-medium text-gray-800   p-2 px-3">
              Industry
            </li>
          </Link>
          <Link className="h-20 flex items-center hover:border-b-8 hover:border-blue  hover:text-blue">
            <li className="text-xl font-medium text-gray-800   p-2 px-3">
              Catalyst
            </li>
          </Link>
          <Link className="h-20 flex items-center hover:border-b-8 hover:border-blue  hover:text-blue">
            <li className="text-xl font-medium text-gray-800  p-2 px-3">
              MegaMap
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// src="src/assets/home/featured/f-1.png"
