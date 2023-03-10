import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex text-gray-800 gap-4 h-20 items-center mx-20">
      <div className="flex  gap-3">
        <img className="h-10 w-10" src={Logo} alt="logo" />
        <h1 className="text-3xl text-gray-500 font-medium">Microsoft</h1>
      </div>
      <div className="h-12 w-1 bg-black"></div>
      <div className="flex items-center">
        <ul className="flex gap-5 align-middle items-center ">
          <Link
            to={"/"}
            className=" h-20 flex items-center border-b-8 border-blue"
          >
            <li className="text-xl  font-medium text-blue p-2">Home</li>
          </Link>
          <Link
            to={"https://microsoft.sharepoint.com/teams/DataAIGBBCommunity/"}
          >
            <li className="text-xl font-medium text-gray-800">GBB Community</li>
          </Link>
          <li className="text-xl font-medium text-gray-800">Apps & DAI</li>
          <Link to={"industry"}>
            <li className="text-xl font-medium text-gray-800">Industry</li>
          </Link>
          <li className="text-xl font-medium text-gray-800">Catalyst</li>
          <li className="text-xl font-medium text-gray-800">MegaMap</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// src="src/assets/home/featured/f-1.png"
