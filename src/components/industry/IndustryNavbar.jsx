
import {Industry} from "../../data/Industry/Industry_data";
import {  Link } from 'react-router-dom';
import IndustryOverview from "./IndustryOverview";
import IndustrySolutionPlayes from "./IndustrySolutionPlayes";
import React from "react";

const IndustryNavbar = ({ activeTab , state }) => {

    const industryFetch = Industry.find((industry) => activeTab === industry?.link);

    return (
        <>

        <div className="w-full h-24 bg-img-banner bg-no-repeat bg-cover flex flex-col justify-center shadow-navbar-shadow">
            <ul className="flex h-full items-center flex-row justify-between gap-10 mx-10 md:mx-32">
                {Industry.map((industry) => (
                    <li
                        key={industry?.id}
                        className={`flex items-center h-full p-3 text-white font-medium text-2xl ${
                            activeTab === industry?.link ? 'border-b-8 font-bold' : ''
                        } hover:border-b-8`}
                    >
                        <Link to={`/industry/${industry?.link}`}>
                            {industry?.title}
                        </Link>
                    </li>
                ))}

                <Link to="/all_industries">
                    <li className="flex items-center p-3 px-5 rounded-full bg-white text-blue font-medium text-2xl">
                        All Industries
                    </li>
                </Link>
            </ul>
        </div>


            <IndustryOverview activeTab={activeTab} activeIndustryData={industryFetch} />

            {/* Industry Solution Plays */}
            <IndustrySolutionPlayes
                activeTab={activeTab}
                activeIndustryData={industryFetch}

            />
        </>
    );
};

export default IndustryNavbar;
