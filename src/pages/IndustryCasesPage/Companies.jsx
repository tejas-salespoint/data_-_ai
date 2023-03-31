import { capgemini } from "constants";
import { wpp } from "constants";
import { wipro } from "constants";
import { Ey } from "constants";
import { dxc } from "constants";
import { dsa } from "constants";
import { luxoft } from "constants";
import { tcs } from "constants";
import React from "react";

const Companies = () => {
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <h4 className="font-semibold py-6 text-blue">DAI Partner Solutions</h4>
      <div className="grid grid-cols-5 grid-rows-2 gap-5 place-items-center">
        <div className="p-8  bg-light-gray ">
          <img className="h-15 " src={tcs} alt="tcs" />
        </div>
        <div className="p-8 h-20  bg-light-gray ">
          <img className="h-15" src={capgemini} alt="capgemini" />
        </div>
        <div className="p-8 bg-light-gray ">
          <img className="h-20" src={luxoft} alt="lux" />
        </div>
        <div className="p-8 bg-light-gray ">
          <img className="h-20" src={wpp} alt="wpp" />
        </div>
        <div className="p-8 bg-light-gray ">
          <img className="h-20" src={dsa} alt="dsa" />
        </div>
        <div className="p-8  ">
          {/* <img className="h-20" src={wipro} alt="wipro" /> */}
        </div>
        <div className="p-8 bg-light-gray ">
          <img className="h-20" src={wipro} alt="wipro" />
        </div>
        <div className="p-8 bg-light-gray ">
          <img className="h-20" src={dxc} alt="dxc" />
        </div>
        <div className="p-8 bg-light-gray ">
          <img className="h-20" src={Ey} alt="Ey" />
        </div>
      </div>
    </section>
  );
};

export default Companies;
