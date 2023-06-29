import IndustryNavbar from "components/industry/IndustryNavbar";
import IndustryOverview from "components/industry/IndustryOverview";
import IndustrySolutionPlayes from "components/industry/IndustrySolutionPlayes";
import { Industry } from "data/Industry/Industry_data";
import React from "react";

const DynamicIndustry = () => {



 const currentURL = window?.location?.pathname
 const currentIndustry = currentURL.split('/')[currentURL.split.length]
 const industryFetch = Object.assign({},...Industry.filter(industry  => currentIndustry === industry?.link))



  return (
    <section>
    {/* industry navbar */}
      <IndustryNavbar activeTab={currentIndustry}/>

      {/* industry Overview */}
      <IndustryOverview activeTab={currentIndustry}  activeIndustryData={industryFetch} />

      {/* Industry Solution Plays */}
      <IndustrySolutionPlayes activeTab={currentIndustry}  activeIndustryData={industryFetch}/>

      
    </section>
  );
};

export default DynamicIndustry;
