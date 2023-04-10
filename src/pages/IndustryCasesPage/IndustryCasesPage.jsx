import Header from "components/Header";
import React from "react";
import CasesAdditionalResources from "./CasesAdditionalResources";
import CasesContent from "./CasesContent";
import Companies from "./Companies";

const IndustryCasesPage = () => {
  return (
    <>
      <Header title={"Automated Quality Inspection"} />
      <CasesContent/>
      <Companies />
      <CasesAdditionalResources />
    </>
  );
};

export default IndustryCasesPage;
