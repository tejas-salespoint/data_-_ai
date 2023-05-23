import { powerAppsImg } from "constants";
import React from "react";
import { Link } from "react-router-dom";

const CasesAdditionalResources = () => {
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10 flex justify-center items-center">
    <Link to={'https://apps.powerapps.com/play/e/839eace6-59ab-4243-97ec-a5b8fcc104e4/a/650ccba3-1876-4884-ac90-3eeb9e2b54ca?tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47'} target="_blank" className="w-[60%]">

   
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
