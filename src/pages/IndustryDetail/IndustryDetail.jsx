import Header from "components/Header";
import React from "react";
import IndustryDetailFooter from "./IndustryDetailFooter/IndustryDetailFooter";
import IndustryDetailOptions from "./IndustryDetailOptions/IndustryDetailOptions";
import IndustryDetailOverview from "./IndustryDetailOverview/IndustryDetailOverview";

const IndustryDetail = () => {
  return (
    <>
      <Header title={"Connected Vehicle"} />
      <IndustryDetailOverview />
      <IndustryDetailOptions />
      <IndustryDetailFooter />
    </>
  );
};

export default IndustryDetail;
