import React from "react";
import {  Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const activeLink =
    "h-20 flex items-center text-blue  hover:border-b-4 hover:border-blue  hover:text-blue border-b-4 border-blue ";
  const nonActiveLink =
    "h-20 flex items-center text-gray-800  hover:border-b-4 hover:border-blue  hover:text-blue";

  const navLinks = [
    {
      id: 1,
      title: "Home",
      link: "/",
      active: "active",
    },
    {
      id: 4,
      title: "DAI Ind. Use Cases",
      link: "/additional_resources",
    },
    {
      id: 2,
      title: "GBB Community",
      link: "https://microsoft.sharepoint.com/teams/DataAIGBBCommunity/",
      target: "_blank",
    },
    {
      id: 3,
      title: "Specialist Community",
      link: "/additional_resources",
    },
   
    {
      id: 5,
      title: "Industry Hub",
      link: "https://industryhub.transform.microsoft.com/",
      target: "_blank",
    },

    {
      id: 6,
      title: "Partners For DAI",
      link: "/additional_resources",
    },
    {
      id: 7,
      title: "MegaMap",
      link: "https://apps.powerapps.com/play/e/839eace6-59ab-4243-97ec-a5b8fcc104e4/a/2db83f8b-2acb-4cc9-a835-9c462479c0b4?tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47",
      target: "_blank",
    },

    {
      id: 8,
      title: "Industry Hub",
      link: "/additional_resources",
    },
  ];

  return (
    <div className="flex text-gray-800 gap-4 items-center mx-20  main-navbar-shadow ">
      <Link to={'/'} className="flex  gap-3 ">
        <img className="h-10 w-auto " src={Logo} alt="logo" />
        <h1 className="text-3xl text-gray-500 font-medium ">Microsoft</h1>
      </Link>
      <div className="h-12 ml-4 w-1 bg-black block"></div>
      <div className="flex items-center">
        <ul className="flex gap-5 align-middle items-center ">
          {navLinks.map((nav) => (
            <NavLink
              to={nav?.link}
              className={({ isActive }) =>
                isActive ? activeLink : nonActiveLink
              }
              target={nav?.target}
            >
              <li
                className={`text-xl   min-w-0 font-medium   p-2 px-3`}
              >
                {nav?.title}
              </li>
            </NavLink>
          ))}

         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// src="src/assets/home/featured/f-1.png"
