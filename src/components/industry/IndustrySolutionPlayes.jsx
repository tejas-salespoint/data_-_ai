import React, {  useState } from "react";
import IndustryDynamicTable from "./IndustryDynamicTable";

const IndustrySolutionPlayes = ({ activeIndustryData }) => {
  const industry = activeIndustryData;

  const [tabActive, setTabActive] = useState(industry?.solution_plays[0].id);

  const tabActiveHandler = (id) => {
    setTabActive(id);
  };



  return (
    <>
      <section className="mx-10 my-10  md:mx-32 md:my-10">
        <ul className="flex gap-5  flex-nowrap relative overflow-hidden">
          {industry?.solution_plays?.map((item) => (
            <li
              onClick={() => tabActiveHandler(item?.id)}
              key={item?.id}
              className={`flex items-center  whitespace-nowrap  cursor-pointer text-2xl font-medium text-blue bg-light-blue  px-3 py-2 ${
                tabActive === item?.id ? "border-4 border-blue-500" : ""
              }`}
            >
              {item?.title}
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
