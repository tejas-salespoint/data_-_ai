import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Parser from "html-react-parser";

const IndustryDynamicTable = ({ activeId, activeIndustryData, tabActive,solutionPlay }) => {
  
  //  Todo :: current data -> Solition play data
  const solution_play = Object.assign(
    {},
    ...activeIndustryData?.solution_plays?.filter(
      (play) => play?.id === activeId
    )
  );

  const [toggleState, setToggleState] = useState();

  function changeToggle() {
    setToggleState(solution_play?.use_cases[0]?.id);
  }

  useEffect(() => {
    changeToggle();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabActive]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const currentUseCases = solution_play?.use_cases.find(
    (cases) => cases.id === toggleState
  );

  return (
    <section className="mx-10 my-10 h-[42rem] overflow-hidden  md:mx-32 md:my-10 grid grid-cols-3 grid-flow-row border m-5 border-gray-600 ">
      {/* First component  */}

      {/* <div className="flex flex-col overflow-auto  scrollbar scrollbar-thin scrollbar-thumb-[#CCCCCC] scrollbar-track-transparent"> */}
      <div className="flex flex-col overflow-y-scroll rounded-lg rounded-full">
        {/* first component multiple tabs */}
        {/* 1st */}
        <div className={`m-5`}>
          <h4 className="text-blue font-bold mb-9">{solution_play?.title}</h4>
          <div className="flex flex-col gap-6  ">
            {/* content */}

            {Parser(solution_play?.content)}

            {}
          </div>
        </div>
      </div>
      {/* second navbar component */}
      <div className={`bg-light-blue`}>
        <div className=" flex flex-col  gap-2   bg-light-blue pt-8 w-100">
          {/* solution play use cases map */}
          {
            solution_play?.use_cases[0].title && solution_play?.use_cases?.map((cases) => {
                return (
                    <label
                        key={cases?.id}
                        onClick={() => toggleTab(cases?.id)}
                        className={`text-blue text-lg font-bold p-3 px-6  ${
                            toggleState === cases?.id
                                ? "bg-white border-l-8 border-black w-100 shadow-custom-shadow"
                                : ""
                        }`}
                    >
                      {cases?.title}
                    </label>
                );
              })
          }
        </div>
      </div>

      {/* third Content Component */}
      <div className="p-5 overflow-y-scroll">
        {/* tab 1 */}
        {/* <div className={toggleState == 1 ? "" : "hidden"}> */}

        {

        }
        <div className={`${solution_play?.use_cases[0].title ? "" : 'hidden'}`}>
          <h4 className="font-bold text-blue mb-9">{currentUseCases?.title}</h4>
          <div className="flex gap-4 flex-col ">
            <p className="font-bold ">
              {currentUseCases?.use_cases_content[0]?.subtitle}
            </p>

            {/* content */}

            {Parser(currentUseCases?.use_cases_content[0]?.desc || "")}
          </div>
          <button className=" px-3 py-2 my-6 bg-blue text-sm font-extrabold rounded-full text-white">
            <Link
              // to={`/industry/${activeIndustryData?.link}/${solutionPlay}/${currentUseCases?.title}`}
              to={`/industry/${activeIndustryData?.link}/${ currentUseCases?.solution_play ? currentUseCases?.solution_play : solutionPlay}/${currentUseCases?.title}`}
            >
              See more
            </Link>
          </button>
        </div>

      
      </div>
    </section>
  );
};

export default IndustryDynamicTable;
