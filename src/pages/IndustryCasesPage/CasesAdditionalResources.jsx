import LinkIcon from "assets/icons/LinkIcon";
import PlayIcon from "assets/icons/PlayIcon";
import SystemIcon from "assets/icons/SystemIcon";

import TestIcon from "assets/icons/TestIcon";

import React from "react";
import { Link } from "react-router-dom";

const CasesAdditionalResources = () => {
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <h4 className="font-semibold py-6 text-blue">Additional Resources</h4>
      <div className="grid grid-cols-5  gap-12 place-items-center">
        <Link className="p-5 flex gap-2 bg-light-blue w-full items-center justify-center hover:bg-white hover:shadow-company-shadow ">
          <TestIcon />
          <span className="text-blue font-semibold">Assets</span>
        </Link>
        <Link className="p-5 flex gap-2 bg-light-blue w-full items-center justify-center hover:bg-white hover:shadow-company-shadow">
          <PlayIcon />
          <span  className="text-blue font-semibold">Demo</span>
        </Link>
        <Link className="p-5 flex gap-2 bg-light-blue w-full items-center justify-center hover:bg-white hover:shadow-company-shadow">
          <SystemIcon />
          <span  className="text-blue font-semibold">Saas</span>
        </Link>
        <Link to={'https://apps.powerapps.com/play/e/839eace6-59ab-4243-97ec-a5b8fcc104e4/a/2db83f8b-2acb-4cc9-a835-9c462479c0b4?tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47'} target='_blank' className="p-5 col-span-2 flex gap-1 bg-power-apps-bg w-full items-center justify-center hover:bg-white hover:shadow-company-shadow">
          <LinkIcon />
          <span className="text-white font-semibold" >Power Apps | Industry Use Case MegaMap</span>
        </Link>
      </div>
    </section>
  );
};

export default CasesAdditionalResources;
