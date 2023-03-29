import React from "react";
import AutomobileOverview from "./AutomobileOverview/AutomobileOverview";
import IndustryDyanmicContent from "./IndustryDyanmicContent/IndustryDyanmicContent";
import IndustryNavbar from "./IndustryNavbar/IndustryNavbar";
import IndustryPreFooter from "./IndustryPreFooter/IndustryPreFooter";
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
