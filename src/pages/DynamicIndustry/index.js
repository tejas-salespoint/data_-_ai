import React from "react";
import { useLocation } from "react-router-dom";
import IndustryNavbar from "components/industry/IndustryNavbar";
import IndustryOverview from "components/industry/IndustryOverview";
import IndustrySolutionPlayes from "components/industry/IndustrySolutionPlayes";
import { Industry } from "data/Industry/Industry_data";

const DynamicIndustry = () => {
    const { pathname,state } = useLocation();


    // get a industry name
    const currentIndustry = pathname.split("/").pop();


    return (
        <section>
            {/* industry navbar */}
            <IndustryNavbar activeTab={currentIndustry} state={state} />

            {/* industry Overview */}

        </section>
    );
};

export default DynamicIndustry;
