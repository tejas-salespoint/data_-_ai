import React, {  useState } from "react";
import IndustryDynamicTable from "./IndustryDynamicTable";
import { useCasesButtonIcons } from "constants";
import { Industry } from "data/Industry/Industry_data";
import { useEffect } from "react";


const IndustrySolutionPlayes = ({ activeIndustryData }) => {

  
  const industry = activeIndustryData;

  // industry.solution_plays = industry.solution_plays.filter(item => item.title !== "All Usecases");
  const newIndustry = industry.solution_plays.slice(0, industry.solution_plays.length - 1)

 
const allUseCases =Industry[0]?.solution_plays?.filter(item => item.title === "All Usecases")
console.log(allUseCases)
  const [tabActive, setTabActive] = useState(industry?.solution_plays[0].id);

  const tabActiveHandler = (id) => {
    setTabActive(id);
  };



  return (
    <>
      <section className="mx-10 my-10  md:mx-32 md:my-10">
        <ul className="flex gap-5  flex-nowrap relative overflow-hidden">
          {industry?.solution_plays?.map((item,index) => (
            // <li
            //   onClick={() => tabActiveHandler(item?.id)}
            //   key={item?.id}
            //   className={`flex items-center  whitespace-nowrap  cursor-pointer text-2xl font-medium text-blue bg-light-blue  px-3 py-2 ${
            //     tabActive === item?.id ? "border-4 border-blue-500" : ""
            //   }`}
            // >
            //   {item?.title}
            // </li>
            <li
            onClick={() => tabActiveHandler(item?.id)}
            key={item?.id}
            className={`flex items-center whitespace-nowrap cursor-pointer text-2xl font-medium ${
              index !== industry.solution_plays.length - 1 ? "text-blue bg-light-blue px-3 py-2" : "flex justify-between bg-all-usecases-button-bg items-center rounded-full gap-4 px-8 py-2 text-white"
            } ${tabActive === item?.id ? "border-2 border-blue-500" : ""}`}
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
      <IndustryDynamicTable tabActive={tabActive} activeId={tabActive} activeIndustryData={industry} />
    </>
  );
};

export default IndustrySolutionPlayes;
