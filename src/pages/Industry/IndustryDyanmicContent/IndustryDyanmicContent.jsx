import React, { useState } from "react";
import { Link } from "react-router-dom";

const IndustryDyanmicContent = ({ activeId }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="mx-10 my-10 h-[42rem]  md:mx-32 md:my-10 grid grid-cols-3 grid-flow-row border m-5 border-gray-600 ">
      {/* First component  */}

      {/* <div className="flex flex-col overflow-auto  scrollbar scrollbar-thin scrollbar-thumb-[#CCCCCC] scrollbar-track-transparent"> */}
      <div className="flex flex-col overflow-y-scroll rounded-lg rounded-full">
        {/* first component multiple tabs */}
        {/* 1st */}
        <div className={`m-5   ${activeId == 1 ? "" : "hidden"} `}>
          <h4 className="text-blue font-bold mb-9">Accelerated Innovations</h4>
          <div className="flex flex-col gap-6 ">
            <p className="font-bold"> Business Application Industry Content</p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view.
            </p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view.
            </p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view.
            </p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view.
            </p>
          </div>
        </div>
        {/* 2nd */}
        <div className={`m-5 ${activeId == 2 ? "" : "hidden"}`}>
          <h5 className="text-blue font-bold mb-9">
            Emerging Mobility Services
          </h5>
          <div className="flex flex-col gap-6">
            <p className="font-bold"> Business Application Industry Content</p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view.
            </p>
          </div>
        </div>
        {/* 3rd */}
        <div className={`m-5 ${activeId == 3 ? "" : "hidden"}`}>
          <h5 className="text-blue font-bold my-5">Resilient Operations</h5>
          <div className="flex flex-col gap-6">
            <p className="font-bold"> Business Application Industry Content</p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view.
            </p>
          </div>
        </div>
        {/* 4th */}
        <div className={`m-5 ${activeId == 4 ? "" : "hidden"}`}>
          <h4 className="text-blue font-bold mb-3">Resilient Operations</h4>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <p className="font-bold"> Overview </p>
              <p>
                Realize the true value of your data by unifying disparate data
                sources across the shopper journey, discovering insights that
                enable better experiences
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Roles </p>
              <ul className="list-disc ">
                <li className="mx-4">CIO/VP</li>
                <li className="mx-4">CDO/VP</li>
                <li className="mx-4">COO/VP</li>
                <li className="mx-4">CMO/VP (required by all)</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Customer Challenges </p>
              <ul className="list-disc ">
                <li className="mx-4">
                  Vast amounts of data in many places makes it hard to make
                  sense of it or know what's important and what's not
                </li>
                <li className="mx-4">360-degree view of the customer</li>
                <li className="mx-4">
                  New shopping journeys creating fraud vulnerabilities across
                  digital and voice channels
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Desiried Business Outcomes </p>
              <text>
                Realize the true value of your data by unifying disparate data
                sources across the shopper journey, discovering insights that
                enable better experiences
              </text>
              <ul className="list-disc ">
                <li className="mx-4">
                  Gain insights across the complete view of a shopper's journey
                </li>
                <li className="mx-4">
                  Unlock omnichannel insights with advanced analytics
                </li>
                <li className="mx-4">
                  Protect your revenue from fraud using AI to id patterns and
                  multi-modal biometrics stop fraudsters
                </li>
                <li className="mx-4">
                  Unlock ad revenue using your 1st party shopper data
                </li>
                <li className="mx-4">
                  Reduce costs by optimizing shopper journeys and streamlining
                  automation
                </li>
              </ul>
              <p>
                <Link
                  className="text-blue"
                  target={"_blank"}
                  to={
                    "https://industryhub.transform.microsoft.com/solution-plays/maximize-the-value-of-your-data?tab=overview"
                  }
                >
                  Learn more
                </Link>
                {" "} about this Solution Play 
              </p>
            </div>
          </div>
        </div>
        {/* 5th */}
        <div className={`m-5 ${activeId == 5 ? "" : "hidden"}`}>
          <h5 className="text-blue font-bold mb-9">Increased Organizational</h5>
          <div className="flex flex-col gap-6">
            <p className="font-bold"> Business Application Industry Content</p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view.
            </p>
          </div>
        </div>
      </div>
      {/* second navbar component */}
      <div className={`   ${activeId == 1 ? "" : "hidden"} bg-light-blue`}>
        <div className=" flex flex-col  gap-2   bg-light-blue pt-8 w-100">
          <label
            onClick={() => toggleTab(1)}
            className={`text-blue font-bold p-3 px-6  ${
              toggleState == 1
                ? "bg-white border-l-8 border-black w-100 shadow-custom-shadow"
                : ""
            }`}
          >
            Autonomous Dev Workflow
          </label>
          <label
            onClick={() => toggleTab(2)}
            className={`text-blue font-bold p-3 px-6 ${
              toggleState == 2
                ? "bg-white border-l-8 border-black w-100 shadow-custom-shadow"
                : ""
            }`}
          >
            Connected Vehicle
          </label>
        </div>
      </div>
      <div className={`   ${activeId == 2 ? "" : "hidden"} bg-light-blue`}>
        <div className=" flex flex-col  gap-2   bg-light-blue pt-8 w-100">
          <label
            onClick={() => toggleTab(1)}
            className={`text-blue font-bold p-3 px-6  ${
              toggleState == 1
                ? "bg-white border-l-8 border-black w-100 shadow-custom-shadow"
                : ""
            }`}
          >
            Customer Data Platform
          </label>
        </div>
      </div>
      <div className={`   ${activeId == 3 ? "" : "hidden"} bg-light-blue`}>
        <div className=" flex flex-col  gap-2   bg-light-blue pt-8 w-100">
          <label
            onClick={() => toggleTab(1)}
            className={`text-blue font-bold p-3 px-6  ${
              toggleState == 1
                ? "bg-white border-l-8 border-black w-100 shadow-custom-shadow"
                : ""
            }`}
          >
            Data Sharing & Monetization
          </label>
        </div>
      </div>
      <div className={`   ${activeId == 4 ? "" : "hidden"} bg-light-blue`}>
        <div className=" flex flex-col  gap-2   bg-light-blue pt-8 w-100">
          <label
            onClick={() => toggleTab(1)}
            className={`text-blue font-bold p-3 px-6  ${
              toggleState == 1
                ? "bg-white border-l-8 border-black w-100 shadow-custom-shadow"
                : ""
            }`}
          >
            Connected Factories/Digital Twins
          </label>
          <label
            onClick={() => toggleTab(2)}
            className={`text-blue font-bold p-3 px-6 ${
              toggleState == 2
                ? "bg-white border-l-8 border-black w-100 shadow-custom-shadow"
                : ""
            }`}
          >
            Integrated Supply Chain
          </label>
          <label
            onClick={() => toggleTab(3)}
            className={`text-blue font-bold p-3 px-6 ${
              toggleState == 3
                ? "bg-white border-l-8 border-black w-100 shadow-custom-shadow"
                : ""
            }`}
          >
            Connected Businesses
          </label>
          <label
            onClick={() => toggleTab(4)}
            className={`text-blue font-bold p-3 px-6 ${
              toggleState == 4
                ? "bg-white border-l-8 border-black w-100 shadow-custom-shadow"
                : ""
            }`}
          >
            Sustainability
          </label>
          <label
            onClick={() => toggleTab(5)}
            className={`text-blue font-bold p-3 px-6 ${
              toggleState == 5
                ? "bg-white border-l-8 border-black w-100 shadow-custom-shadow"
                : ""
            }`}
          >
            Automated Quality Inspection
          </label>
        </div>
      </div>

      {/* third Content Component */}
      <div className="m-5">
        {/* tab 1 */}
        <div className={toggleState == 1 ? "" : "hidden"}>
          <h4 className="font-bold text-blue">Connected Vehicle</h4>
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
            <Link to={"/industry/resilient_operations/Automated_quality_inspection"}>See more</Link>
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
          <Link to={"/industry/resilient_operations/Automated_quality_inspection"}>See more</Link>
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

export default IndustryDyanmicContent;
