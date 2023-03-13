import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      link: "/",
      active : 'active'
    },
    {
      title: "Industry",
      link: "/industry",
    },
    {
      title: "App Innovation & DAI",
      link: "/additional_resources",
    },
    {
      title: "Partners For DAI",
      link: "/additional_resources",
    },
    {
      title: "Specialist",
      link: "/additional_resources",
    },
    {
      title: "Additional Resources",
      link: "/additional_resources",
    },
    {
      title: "GBB Community",
      link: "https://microsoft.sharepoint.com/teams/DataAIGBBCommunity/",
      target: "_blank",
    },
    {
      title: "MegaMap",
      link: "https://apps.powerapps.com/play/e/839eace6-59ab-4243-97ec-a5b8fcc104e4/a/2db83f8b-2acb-4cc9-a835-9c462479c0b4?tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47",
      target: "_blank",
    },
  ];

  return (
    <div className="flex text-gray-800 gap-4 items-center mx-20 shadow-navbar-shadow main-navbar-shadow">
      <div className="flex  gap-3">
        <img className="h-10 w-10" src={Logo} alt="logo" />
        <h1 className="text-3xl text-gray-500 font-medium">Microsoft</h1>
      </div>
      <div className="h-12 w-1 bg-black"></div>
      <div className="flex items-center">
        <ul className="flex gap-5 align-middle items-center ">
          {navLinks.map((nav) => (
            <Link
              to={nav?.link}
              className={`h-20 flex items-center  ${ nav?.active ? 'border-b-8 border-blue' : ''}  hover:border-b-8 hover:border-blue  hover:text-blue`}
              target={nav?.target}
            >
              <li className={`text-xl  font-medium  ${ nav?.active ? 'text-blue' : 'text-gray-800'}  p-2 px-3`}>
                {nav?.title}
              </li>
            </Link>
          ))}

          {/* <Link
            to={"/"}
            className="h-20 flex items-center border-b-8 border-blue"
          >
            <li className="text-xl  font-medium text-blue p-2 px-3">Home</li>
          </Link>
          <Link
            target="_blank"
            className="h-20 flex items-center hover:border-b-8 hover:border-blue  hover:text-blue"
            to={""}
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
          <Link
            to={"additional_resources"}
            className="h-20 flex items-center hover:border-b-8 hover:border-blue  hover:text-blue"
          >
            <li className="text-xl font-medium text-gray-800  p-2 px-3">
              Additional Resources
            </li>
          </Link>
          <Link
            target="_blank"
            to={""}
            className="h-20 flex items-center hover:border-b-8 hover:border-blue  hover:text-blue"
          >
            <li className="text-xl font-medium text-gray-800  p-2 px-3">
              MegaMap
            </li>
          </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// src="src/assets/home/featured/f-1.png"
