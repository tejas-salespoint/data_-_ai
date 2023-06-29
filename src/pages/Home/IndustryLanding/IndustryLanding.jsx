import React from "react";
import { Link } from "react-router-dom";

import { AutomotiveIcon } from "constants";
import { FinancialServicesIcon } from "constants";
import { GovernmentIcon } from "constants";

import { RetailIcon } from "constants";
import { OtherIndustriesIcon } from "constants";
import { AutomotiveBlueIcon } from "constants";
import { OtherIndustriesBlueIcon } from "constants";
import { RetailBlueIcon } from "constants";

import { GovernmentBlueIcon } from "constants";
import { FinancialServicesBlueIcon } from "constants";
import { AllDaiUseCasesIcon } from "constants";
import { EnergyBlueIcon } from "constants";
import { EnergyIcon } from "constants";
import { HealthCareIcon } from "constants";
import { HealthCareBlueIcon } from "constants";

const IndustryLanding = () => {
  const industry = [
    {
      title: "Manufacturing & Mobility",
      icon: AutomotiveIcon,
      icon_hover: AutomotiveBlueIcon,
      url: "/industry/manufacturing_&_mobility",
    },
    {
      title: "Financial Services",
      icon: FinancialServicesIcon,
      icon_hover: FinancialServicesBlueIcon,
      url: "/industry/financial",
    },
    {
      title: "Healthcare",
      icon: HealthCareIcon,
      icon_hover: HealthCareBlueIcon,
      url: "/industry/healthcare",
    },
    {
      title: "Retail & CG",
      icon: RetailIcon,
      icon_hover: RetailBlueIcon,
      url: "/industry/retail_and_cg",
    },
    {
      title: "Government",
      icon: GovernmentIcon,
      icon_hover: GovernmentBlueIcon,
      url: "/industry/government",
    },
    {
      title: "Energy",
      icon: EnergyIcon,
      icon_hover: EnergyBlueIcon,
      url: "/industry/energy",
    },
    // {
    //   title: "Horizontal",
    //   icon: HorizontalIcon,
    //   icon_hover: HorizontalBlueIcon,
    //   url: "/industry/automotive",
    // },
    // {
    //   title: "Media & Entertainment",
    //   icon: ManufacturingIcon,
    //   icon_hover: ManufacturingBlueIcon,
    //   url: "/industry/media_&_entertainment",
    // },
   
    {
      title: "All Industries",
      icon: OtherIndustriesIcon,
      icon_hover: OtherIndustriesBlueIcon,
      url: "/industry_grid",
    },
  ];
  

  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <h4 className="font-semibold py-6 text-blue">Industry Landing</h4>
      <div className="grid grid-cols-8">
        {/* All Dai use Cases */}
          <Link to={'/additional_resources'} >
            <div className="flex flex-col group justify-center items-center">
              <div className=" bg-all-usecases-bg shadow-all_dai_usecases-shadow   w-[7rem] h-[7rem] m-5 flex justify-center items-center rounded-full">
                <div className="bg-white p-3 rounded-full">
                  <img className="w-14" src={AllDaiUseCasesIcon} alt='use_cases' />
                </div>
                
              </div>
              <h3 className="text-2xl font-semibold text-blue text-center">
                All DAI Ind. Use Cases
              </h3>
            </div>
          </Link>

        {/* Automotive  */}
        {industry?.map((item) => (
          <Link to={item?.url} key={item?.title}>
            <div className="flex flex-col group justify-center items-center">
              <div className="bg-blue group-hover:bg-white group-hover:border-2 group-hover:border-blue w-[7rem] h-[7rem] m-5 flex justify-center items-center rounded-full">
                <div className="group-hover:hidden">
                  <img className="w-14" src={item?.icon} alt={item?.title} />
                </div>
                <div className="hidden group-hover:block">
                  <img
                    className="w-14"
                    src={item?.icon_hover}
                    alt={item?.title}
                  />
                </div>
              </div>
              <h3 className="text-2xl text-blue font-semibold text-center">
                {item?.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default IndustryLanding;
