import React, {  useState } from "react";
import IndustryDynamicTable from "./IndustryDynamicTable";
import { useCasesButtonIcons } from "constants";
import { Industry } from "data/Industry/Industry_data";
import { useEffect } from "react";


const IndustrySolutionPlayes = ({ activeIndustryData }) => {

  
  const industry = activeIndustryData;

  const [tabIndustry,setTabIndustry] = industry.link
  const [tabActive, setTabActive] = useState(industry?.solution_plays[0].id);
  const [tabActiveSolutionPlayTitle,setTabActiveSolutionPlayTitle] = useState(industry?.solution_plays[0].title)

  const tabActiveHandler = (id,title) => {
    setTabActive(id);
    setTabActiveSolutionPlayTitle(title);
  };



  return (
    <>
      <section className="mx-10 my-10  md:mx-32 md:my-10">
        <ul className="flex gap-5  flex-wrap relative overflow-hidden">
          {industry?.solution_plays?.map((item,index) => (
            <li
            onClick={() => tabActiveHandler(item?.id,item?.title) }
            key={item?.id}
            className={`flex items-center whitespace-nowrap cursor-pointer text-2xl font-medium ${
              index !== industry.solution_plays.length - 1 ? "text-blue bg-light-blue px-3 py-2" : "flex justify-between bg-all-usecases-button-bg items-center rounded-full gap-4 px-8 py-2 text-white"
            } ${tabActive === item?.id ? "border-2 border-blue  text-blue" : ""}`}
          >
            {item?.title}
            {index === industry.solution_plays.length - 1 && (
              <span className="p-2 w-10 h-10 flex justify-center bg-white rounded-full">
                <img className="w-4" src={useCasesButtonIcons} alt="useCasesButton" />
              </span>
            )}
          </li>
          ))}
       

         
        </ul>

        {/* Dynamic Table */}
        {/* Industry Dynamic Use Cases Table */}
      </section>
      <IndustryDynamicTable tabActive={tabActive} activeId={tabActive}  solutionPlay={tabActiveSolutionPlayTitle} activeIndustryData={industry} />
    </>
  );
};

export default IndustrySolutionPlayes;
