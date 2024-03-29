import React from "react";
import AutomobileOverview from "./AutomobileOverview/AutomobileOverview";

import IndustryNavbar from "./IndustryNavbar/IndustryNavbar";

import IndustryRowTabs from "./IndustryRowTabs/IndustryRowTabs";

const Industry = () => {
  return (
    <div>
      <IndustryNavbar />
      <AutomobileOverview />
      <IndustryRowTabs />
      {/* <IndustryPreFooter /> */}
    </div>
  );
};

export default Industry;
