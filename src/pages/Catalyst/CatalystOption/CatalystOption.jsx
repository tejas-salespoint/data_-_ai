import React from "react";
import Edge from "assets/edge.png";
import {Industry} from "data/Industry/Industry_data";
import {Link} from "react-router-dom";
import {
    AutomotiveBlueIcon,
    AutomotiveIcon, EnergyBlueIcon, EnergyIcon,
    FinancialServicesBlueIcon,
    FinancialServicesIcon, GovernmentBlueIcon, GovernmentIcon, HealthCareBlueIcon,
    HealthCareIcon, OtherIndustriesBlueIcon, OtherIndustriesIcon, RetailBlueIcon, RetailIcon
} from "constants";

const ImgSources = [
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
        url: "/industry/financial_services",
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
        url: "/all_industries",
    },
];

const CatalystOption = () => {
    return (
        <section className="mx-10 my-10  md:mx-32 md:my-10 bg-light-blue p-4">
            <div className="grid grid-cols-4 grid-rows-2 p-8 gap-10">

                {Industry.map((industry) => (
                    <div className="flex flex-col gap-5 ">
                        <label className="flex items-center gap-5 font-bold text-2xl">
<div className={' bg-blue  rounded-full'}>


                            <img className='object-scale-down h-7 m-3 w-7' src={ImgSources.find(item => item.title === industry?.title).icon}
                                 alt="industry_image"/>
</div>
                            {industry?.title}

                        </label>
                        <ul className="flex flex-col gap-2">
                            {industry?.solution_plays[
                            industry.solution_plays.length - 1
                                ].use_cases.map((item) => (


                                < li className={'ml-3'}>
                                    <Link
                                        state={{
                                            solution: industry?.solution_plays[industry.solution_plays.length - 1].id,
                                            usecase: item?.id,
                                        }}


                                        to={ industry?.title !==  'Energy' ? `/industry/${industry?.link}/${item?.solution_play}/${item?.title}` : null}
                                        className="flex gap-2 font-medium items-center">

                                        {industry?.title !==  'Energy' ?  <img className="h-6" src={Edge} alt="edge"/> : ''}
                                        {/*<img className="h-6" src={Edge} alt="edge"/>*/}
                                        <p  className={'ml-5'}>

                                            {industry?.title !== 'Energy' ? item?.title : "Coming Soon"}
                                        </p>

                                    </Link>
                                </li>


                            ))}

                        </ul>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default CatalystOption;
