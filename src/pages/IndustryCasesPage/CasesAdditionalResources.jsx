import { powerAppsImg } from "constants";
import React from "react";
import { Link } from "react-router-dom";

const CasesAdditionalResources = () => {
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10 flex justify-center items-center">
    <Link className="w-[60%]">

   
      <div className="border border-2 p-5 rounded-2xl shadow-company-shadow border-blue">
        <h4 className="font-semibold text-blue flex justify-center mb-5">
          Additional Resources
        </h4>
        <div className="grid grid-cols-2 gap-10 px-8">
          <div className="flex flex-col ">
            <h4 className="font-medium mb-5 text-gray">
              Pitch Decks, Demos, Assets, Solution Accelerators, etc.
            </h4>

            <button className="p-5 my-8 text-white font-semibold col-span-2 flex gap-1 bg-power-apps-bg w-full items-center justify-center hover:bg-white hover:shadow-company-shadow">
              Power Apps | Industry Use Case MegaMap
            </button>
          </div>
          <div className=" rounded-xl">
            <img className="border-2 rounded-xl border-blue" src={powerAppsImg} alt="powerApps" />
          </div>
        </div>
      </div>
      </Link>
    </section>
  );
};

export default CasesAdditionalResources;
