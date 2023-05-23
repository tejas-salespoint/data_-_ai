import React from "react";
import { Link } from "react-router-dom";


import { AutomotiveIcon } from "constants";
import { FinancialServicesIcon } from "constants";
import { GovernmentIcon } from "constants";
import { HealthCareIcon } from "constants";
import { HorizontalIcon } from "constants";
import { ManufacturingIcon } from "constants";
import { RetailIcon } from "constants";
import { OtherIndustriesIcon } from "constants";
import { AutomotiveBlueIcon } from "constants";
import { OtherIndustriesBlueIcon } from "constants";
import { RetailBlueIcon } from "constants";
import { ManufacturingBlueIcon } from "constants";
import { HorizontalBlueIcon } from "constants";
import { HealthCareBlueIcon } from "constants";
import { GovernmentBlueIcon } from "constants";
import { FinancialServicesBlueIcon } from "constants";

const IndustryLanding = () => {
  const industry = [
    {
      title: "Automotive",
      icon: AutomotiveIcon,
      icon_hover: AutomotiveBlueIcon,
      url : '/industry/automotive'
     
    },
    {
      title: "Financial Services",
      icon: FinancialServicesIcon,
      icon_hover: FinancialServicesBlueIcon,
      url : '/industry/automotive'
    },
    {
      title: "Government",
      icon: GovernmentIcon,
      icon_hover: GovernmentBlueIcon,
      url : '/industry/automotive'
    },
    {
      title: "Healthcare",
      icon: HealthCareIcon,
      icon_hover: HealthCareBlueIcon,
       url : '/industry/automotive'
    },
    {
      title: "Horizontal",
      icon: HorizontalIcon,
      icon_hover: HorizontalBlueIcon,
       url : '/industry/automotive'
    },
    {
      title: "Manufacturing",
      icon: ManufacturingIcon,
      icon_hover: ManufacturingBlueIcon,
       url : '/industry/automotive'
    },
    {
      title: "Retail",
      icon: RetailIcon,
      icon_hover: RetailBlueIcon,
       url : '/industry/automotive'
    },
    {
      title: "Other Industries",
      icon: OtherIndustriesIcon,
      icon_hover: OtherIndustriesBlueIcon,
      url : '/industry_grid'
    },
  ];

  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <h4 className="font-semibold py-6 text-blue">Industry Landing</h4>
      <div className="grid grid-cols-8 gap-5 ">
        {/* Automotive  */}
        {industry?.map((item) => (
          <Link to={item?.url} key={item?.title}>
            <div className="flex flex-col group justify-center items-center">
              <div className="bg-blue group-hover:bg-white group-hover:border-2 group-hover:border-blue w-[7rem] h-[7rem] m-5 flex justify-center items-center rounded-full">
                <div className="group-hover:hidden">
                  <img className="w-14" src={item?.icon} alt={item?.title} />
                </div>
                <div className="hidden group-hover:block">
                  <img className="w-14" src={item?.icon_hover} alt={item?.title} />
                </div>
              </div>
              <h3 className="text-2xl text-blue font-bold text-center">
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
