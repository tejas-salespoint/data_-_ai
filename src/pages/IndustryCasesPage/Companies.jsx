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

    
  
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <h4 className="font-semibold py-6 text-blue">DAI Partner Solutions</h4>
      <div className="grid grid-cols-5 grid-rows-2 gap-8 place-items-center plac">
        <Link to={'https://microsoft.com'} target='_blank' className="h-15 w-80 p-8 flex justify-center items-center  bg-light-gray hover:bg-white hover:shadow-company-shadow  ">
          <img className="h-[4rem]" src={tcs} alt="tcs" />
        </Link>
        
        <Link className="h-15 w-80 p-8 flex justify-center items-center  bg-light-gray hover:bg-white hover:shadow-company-shadow ">
          <img className="h-[4rem]" src={capgemini} alt="capgemini" />
        </Link>
        <Link className="h-15 w-80 p-8  flex justify-center items-center bg-light-gray hover:bg-white hover:shadow-company-shadow ">
          <img className="h-[4rem]" src={luxoft} alt="lux" />
        </Link>
        <Link className="h-15 w-80 p-8 flex justify-center items-center bg-light-gray hover:bg-white hover:shadow-company-shadow ">
          <img className="h-[4rem]" src={wpp} alt="wpp" />
        </Link>
        <Link className="h-15 w-80 p-8 flex justify-center items-center bg-light-gray hover:bg-white hover:shadow-company-shadow ">
          <img className="h-[4rem]" src={dsa} alt="dsa" />
        </Link>
        <Link className="  ">
          {/* <img className="h-10 m-8" src={wipro} alt="wipro" /> */}
        </Link>
       
        <Link className="h-15 w-80 p-8 flex justify-center items-center bg-light-gray hover:bg-white hover:shadow-company-shadow ">
          <img className="h-[4rem]" src={wipro} alt="wipro" />
        </Link>
        <Link className="h-15 w-80 p-8 flex justify-center items-center bg-light-gray hover:bg-white hover:shadow-company-shadow ">
          <img className="h-[4rem]" src={dxc} alt="dxc" />
        </Link>
        <Link className="h-15 w-80 p-8 flex justify-center items-center bg-light-gray hover:bg-white hover:shadow-company-shadow ">
          <img className="h-[4rem]" src={Ey} alt="Ey" />
        </Link>
       </div>
    </section>
    </>
  );
};

export default Companies;
