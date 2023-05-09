import Header from "components/Header";
import React, { useEffect } from "react";
import CasesAdditionalResources from "./CasesAdditionalResources";
import CasesContent from "./CasesContent";


const IndustryCasesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header title={"Automated Quality Inspection"} />
      <CasesContent />
      {/* <Companies /> */}
      <CasesAdditionalResources />
    </>
  );
};

export default IndustryCasesPage;
