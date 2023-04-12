import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Parser from "html-react-parser";
const IndustryDynamicTable = ({ activeId, activeIndustryData, tabActive }) => {
  // activeId = 1;

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
  }, [tabActive]);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const currentUseCases = solution_play?.use_cases.find(
    (cases) => cases.id === toggleState
  );

  return (
    <section className="mx-10 my-10 h-[42rem]  md:mx-32 md:my-10 grid grid-cols-3 grid-flow-row border m-5 border-gray-600 ">
      {/* First component  */}

      {/* <div className="flex flex-col overflow-auto  scrollbar scrollbar-thin scrollbar-thumb-[#CCCCCC] scrollbar-track-transparent"> */}
      <div className="flex flex-col overflow-y-scroll rounded-lg rounded-full">
        {/* first component multiple tabs */}
        {/* 1st */}
        <div className={`m-5 `}>
          <h4 className="text-blue font-bold mb-9">{solution_play?.title}</h4>
          <div className="flex flex-col gap-6 ">
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
          {solution_play?.use_cases?.map((cases) => {
            return (
              <label
                key={cases?.id}
                onClick={() => toggleTab(cases?.id)}
                className={`text-blue font-bold p-3 px-6  ${
                  toggleState === cases?.id
                    ? "bg-white border-l-8 border-black w-100 shadow-custom-shadow"
                    : ""
                }`}
              >
                {cases?.title}
              </label>
            );
          })}
        </div>
      </div>


      {/* third Content Component */}
      <div className="m-5">
        {/* tab 1 */}
        {/* <div className={toggleState == 1 ? "" : "hidden"}> */}
        <div>
          <h4 className="font-bold text-blue">{currentUseCases?.title}</h4>
          <div className="flex gap-4 flex-col my-5">
            <p className="font-bold">
              {currentUseCases?.use_cases_content[0]?.subtitle}
            </p>
            
            {/* content */}
            
            {Parser(currentUseCases?.use_cases_content[0]?.desc || "not found")}
            {/* {currentUseCases?.use_cases_content[0]?.desc} */}
          </div>
          <button className=" px-3 py-2 my-6 bg-blue text-sm font-extrabold rounded-full text-white">
            <Link
              to={"/industry/resilient_operations/Automated_quality_inspection"}
            >
              See more
            </Link>
          </button>
        </div>

        {/* tab 2 */}
        <div className={toggleState == 2 ? "" : "hidden"}>
          <h4 className="font-bold text-blue">Autonomous Devlopment</h4>
          <div className="flex gap-4 flex-col my-5">
            <p className="font-bold">Business Application Industry Content</p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the{" "}
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>
          </div>
          <button className=" px-3 py-2 my-6 bg-blue text-sm font-extrabold rounded-full text-white">
            See more
          </button>
        </div>

        {/* tab 3 */}
        <div className={toggleState == 3 ? "" : "hidden"}>
          <h4 className="font-bold text-blue">DevOps / ML Ops</h4>
          <div className="flex gap-4 flex-col my-5">
            <p className="font-bold">Business Application Industry Content</p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the{" "}
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>
          </div>
          <button className=" px-3 py-2 my-6 bg-blue text-sm font-extrabold rounded-full text-white">
            See more
          </button>
        </div>

        {/* tab 4 */}
        <div className={toggleState == 4 ? "" : "hidden"}>
          <h4 className="font-bold text-blue">Connected Services</h4>
          <div className="flex gap-4 flex-col my-5">
            <p className="font-bold">Business Application Industry Content</p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the{" "}
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>
          </div>
          <button className=" px-3 py-2 my-6 bg-blue text-sm font-extrabold rounded-full text-white">
            See more
          </button>
        </div>

        {/* tab 5 */}
        <div className={toggleState == 5 ? "" : "hidden"}>
          <h4 className="font-bold text-blue">Automated Quality Inspection</h4>
          <div className="flex gap-4 flex-col my-5">
            <p className="font-bold">Overview</p>
            <p>
              Automated quality control improves inspection measurement
              reliability. Accurate measurements on complex parts and high
              throughput production lines is assured with automated inspections.
              These systems can capture more data for large quantities of parts
              faster. <br />
              <br />
              Artificial Intelligence of Things (AlT) is the combination of
              artificial intelligence (AI) technologies with the Internet of
              Things (loT) infrastructure to achieve more efficient loT
              operations, improve human-machine interactions and enhance data
              management and analytics. Automated quality inspection typically
              leverages Al image analysis (vision) and data from loT sensors to
              identify product quality issues in real-time on the production
              line, triggering an alert for further inspection and/or action if
              problems are detected. <br />
            </p>
            <p>
              <div className="font-bold pr-4 ">
                {" "}
                Key Services / Product Stack{" "}
              </div>{" "}
              <br />
              Azure Container Registry, Azure DevOps, Azure loT Hub, Azure
              Key/ault, Azure Machine Learning, Cognitive Services: Vision,
              Azure SQL, Azure Storage, Docker, Power BI
            </p>
          </div>
          <button className=" px-3 py-2 my-5 bg-blue text-sm font-extrabold rounded-full text-white">
            <Link
              to={"/industry/resilient_operations/Automated_quality_inspection"}
            >
              See more
            </Link>
          </button>
        </div>

        {/* tab 6 */}
        <div className={toggleState == 6 ? "" : "hidden"}>
          <h4 className="font-bold text-blue">Digital Engineering & HPC</h4>
          <div className="flex gap-4 flex-col my-5">
            <p className="font-bold">Business Application Industry Content</p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the{" "}
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>
          </div>
          <button className=" px-3 py-2 my-6 bg-blue text-sm font-extrabold rounded-full text-white">
            See more
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustryDynamicTable;
