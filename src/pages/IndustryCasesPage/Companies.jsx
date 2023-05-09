import { capgemini } from "constants";
import { wpp } from "constants";
import { wipro } from "constants";
import { Ey } from "constants";
import { dxc } from "constants";
import { dsa } from "constants";
import { luxoft } from "constants";
import { tcs } from "constants";
import React from "react";
import { Link } from "react-router-dom";

const Companies = () => {
  return (
    <>
      <section className="">
        <h4 className="font-semibold py-6  text-blue">
          DAI Partner Solutions for Automated Quality Inspection
        </h4>
        <div className="grid grid-cols-2 gap-5">
          <Link
            to={"https://microsoft.com"}
            target="_blank"
            className="h-15 w-50 p-5 flex justify-center items-center  bg-light-gray hover:bg-white hover:shadow-company-shadow  "
          >
            <img className="h-[3rem]" src={tcs} alt="tcs" />
          </Link>

          <Link className="h-15 w-50 p-5 flex justify-center items-center  bg-light-gray hover:bg-white hover:shadow-company-shadow ">
            <img className="h-[3rem]" src={capgemini} alt="capgemini" />
          </Link>
          <Link className="h-15 w-50 p-5  flex justify-center items-center bg-light-gray hover:bg-white hover:shadow-company-shadow ">
            <img className="h-[3rem]" src={luxoft} alt="lux" />
          </Link>
          <Link className="h-15 w-50 p-5 flex justify-center items-center bg-light-gray hover:bg-white hover:shadow-company-shadow ">
            <img className="h-[3rem]" src={wpp} alt="wpp" />
          </Link>
          <Link className="h-15 w-50 p-5 flex justify-center items-center bg-light-gray hover:bg-white hover:shadow-company-shadow ">
            <img className="h-[3rem]" src={dsa} alt="dsa" />
          </Link>

          <Link className="h-15 w-50 p-5 flex justify-center items-center bg-light-gray hover:bg-white hover:shadow-company-shadow ">
            <img className="h-[3rem]" src={wipro} alt="wipro" />
          </Link>
          <Link className="h-15 w-50 p-5 flex justify-center items-center bg-light-gray hover:bg-white hover:shadow-company-shadow ">
            <img className="h-[3rem]" src={dxc} alt="dxc" />
          </Link>
          <Link className="h-15 w-50 p-5 flex justify-center items-center bg-light-gray hover:bg-white hover:shadow-company-shadow ">
            <img className="h-[3rem]" src={Ey} alt="Ey" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Companies;
