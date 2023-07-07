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
      link: "/all_data_&_AI_Industry_use_cases",
    },
    {
      id: 2,
      title: "GBB Community",
      link: "https://microsoft.sharepoint.com/teams/DataAIGBBCommunity/?xsdata=MDV8MDF8fDk2OThmODgwMWQyMDQ0ZGEwNTA4MDhkYjc2OWUwMGJlfDcyZjk4OGJmODZmMTQxYWY5MWFiMmQ3Y2QwMTFkYjQ3fDB8MHw2MzgyMzQxOTMxOTI0MjA2MTZ8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxMMk5vWVhSekx6RTVPbTFsWlhScGJtZGZUV3BzYkU1RVVUSk9hbGwwVFhwU2ExcHBNREJPVkVWM1RGUnJkMWxVUlhSYVIwVXhUa2RaZDFwVVNUQk5WRTE1UUhSb2NtVmhaQzUyTWk5dFpYTnpZV2RsY3k4eE5qZzNPREl5TlRFNE5UQXp8OTFhMjkwNmFlZDIwNDgwODA1MDgwOGRiNzY5ZTAwYmV8ODNhOTM0ZGIwOGNhNDMxZGEyM2RmZDlhNzgxNzgyMjQ%3D&sdata=RFlHMTRIT1orZEdFZDUrc1VaUkhRb1IvU0k1enlGTHFOUllpUFJydTZ6RT0%3D&ovuser=72f988bf-86f1-41af-91ab-2d7cd011db47%2Cjimmygill%40microsoft.com&OR=Teams-HL&CT=1687822525527&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMzA2MDQwMTEyNyIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D",
      target: "_blank",
    },
    {
      id: 3,
      title: "Specialist Community",
      link: "https://microsoft.sharepoint.com/teams/DataAISpecialistCommunity/",
      target: "_blank",
    },
   
    // {
    //   id: 5,
    //   title: "Industry Hub",
    //   link: "https://industryhub.transform.microsoft.com/",
    //   target: "_blank",
    // },

    {
      id: 6,
      title: "Partners For DAI",
      link: "/coming_soon",
    },
    {
      id: 7,
      title: "Industry MegaMap",
      link: "https://aka.ms/daiindustrymegamap",
      target: "_blank",
    },

    {
      id: 8,
      title: "Industry Hub",
      link: "https://industryhub.transform.microsoft.com/",
      target: "_blank",
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
            key={nav?.id}
              to={nav?.link}
              className={({ isActive }) =>
                isActive ? activeLink : nonActiveLink
              }
              target={nav?.target}
            >
              <li
                className={`text-xl   min-w-0 font-semibold   p-2 px-3`}
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
