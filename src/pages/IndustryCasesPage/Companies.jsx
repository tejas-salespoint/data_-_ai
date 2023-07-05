


import React from "react";
import { Link } from "react-router-dom";
import {accenture, adobe, ibm, pwc,wipro} from "../../constants";

const Companies = ({usecase}) => {
  return (
    <>
      <section className="">
        <h4 className="font-semibold py-6  text-blue">
          {` DAI Partner Solutions for ${usecase}`}
        </h4>
        <div className="grid grid-cols-2 gap-5">
          <Link to={'https://aka.ms/Adobe_Battlecards'} target={'_blank'} className="h-15 w-50 p-5 flex justify-center items-center bg-light-gray hover:bg-white hover:shadow-company-shadow ">
            <img className="h-[3rem]" src={adobe} alt="adobe" />
          </Link>

          <Link to={'https://aka.ms/Wipro_Battlecards'} target={'_blank'} className="h-15 w-50 p-5  flex justify-center items-center bg-light-gray hover:bg-white hover:shadow-company-shadow ">
            <img className="h-[3rem]" src={wipro} alt="wipro" />
          </Link>

          <Link to={'https://aka.ms/IBM_Battlecards'} target={'_blank'} className="h-15 w-50 p-5 flex justify-center items-center bg-light-gray hover:bg-white hover:shadow-company-shadow ">
            <img className="h-[3rem]" src={ibm} alt="ibm" />
          </Link>

          <Link to={'https://aka.ms/Accenture_Battlecards'} target={'_blank'} className="h-15 w-50 p-5 flex justify-center items-center bg-light-gray hover:bg-white hover:shadow-company-shadow ">
            <img className="h-[3rem]" src={accenture} alt="accenture" />
          </Link>

          <Link to={'https://aka.ms/PWC_Battlecards '} target={'_blank'} className="h-15 w-50 p-5 flex justify-center items-center bg-light-gray hover:bg-white hover:shadow-company-shadow ">
            <img className="h-[3rem]" src={pwc} alt="pwc" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Companies;
