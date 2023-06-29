import Header from "components/Header";
import React, { useEffect } from "react";
import CasesAdditionalResources from "./CasesAdditionalResources";
import CasesContent from "./CasesContent";
import {Industry} from "../../data/Industry/Industry_data";

const IndustryCasesPage = () => {

    const currentURL = window?.location?.pathname
    let data = currentURL.split('/').slice(-3);
    data = data.map(item => item.replace(/%20/g, ' '));
    // Todo :: find Industry
    const industry = Industry.find(ind => ind.link === data[0]);
    // Todo :: find Industry Piller
    const solutionPlay = industry?.solution_plays.find(pillar => pillar.title === data[1]);
    // Todo :: find Industry Piller Usecase
    const useCase = solutionPlay?.use_cases.find(usecase => usecase.title === data[2]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Todo :: Split the url that comes [ industryName | pillers | useCases ]

  return (
    <>
        <Header title={useCase?.title} subtitle={`${industry?.title} |  ${solutionPlay?.title}` } />
        <CasesContent usecase={useCase} />
        <CasesAdditionalResources />
    </>
  );
};

export default IndustryCasesPage;
