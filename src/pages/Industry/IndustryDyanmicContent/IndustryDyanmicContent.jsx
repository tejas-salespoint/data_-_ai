import React, { useState } from "react";
import { Link } from "react-router-dom";

const IndustryDyanmicContent = ({activeId}) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="mx-10 my-10 h-[70vh]  md:mx-32 md:my-10 grid grid-cols-3 grid-flow-row border m-5 border-gray-600 ">
      {/* First component  */}

      <div className="flex flex-col overflow-auto  scrollbar scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-zinc-500">
        {/* first component multiple tabs */}
        {/* 1st */}
        <div className={`m-5   ${activeId == 1 ? '' : 'hidden'} `}>
          <h5 className="text-blue font-bold mb-9">
            Accelerated Innovation
          </h5>
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
        <div className={`m-5 ${activeId == 2 ? '' : 'hidden'}`}>
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
        <div className={`m-5 ${activeId == 3 ? '' : 'hidden'}`}>
          <h5 className="text-blue font-bold mb-9">Resient Operations</h5>
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
        <div className={`m-5 ${activeId == 4 ? '' : 'hidden'}`}>
          <h5 className="text-blue font-bold mb-9">
            Differentiated Customer EXP
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
        {/* 5th */}
        <div className={`m-5 ${activeId == 5 ? '' : 'hidden'}`}>
          <h5 className="text-blue font-bold mb-9">
            Increased Organizational 
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
      </div>
      {/* second navbar component */}
      <div className=" flex flex-col  gap-2   bg-light-blue pt-8 w-100">
        <label
          onClick={() => toggleTab(1)}
          className={`text-blue font-bold p-3 px-6  ${
            toggleState === 1 ? "bg-white border-l-8 border-black w-100 shadow-custom-shadow" : ""
          }`}
        >
          Connected Vehicle
        </label>
        <label
          onClick={() => toggleTab(2)}
          className={`text-blue font-bold p-3 px-6 ${
            toggleState === 2 ? "bg-white border-l-8 border-black w-100 shadow-custom-shadow" : ""
          }`}
        >
          Autonomous Development
        </label>
        <label
          onClick={() => toggleTab(3)}
          className={`text-blue font-bold p-3 px-6 ${
            toggleState === 3 ? "bg-white border-l-8 border-black w-100 shadow-custom-shadow" : ""
          }`}
        >
          Dev Ops / ML Ops
        </label>
        <label
          onClick={() => toggleTab(4)}
          className={`text-blue font-bold p-3 px-6 ${
            toggleState === 4 ? "bg-white border-l-8 border-black w-100 shadow-custom-shadow" : ""
          }`}
        >
          Connected Services
        </label>
        <label
          onClick={() => toggleTab(5)}
          className={`text-blue font-bold p-3 px-6 ${
            toggleState === 5 ? "bg-white border-l-8 border-black w-100 shadow-custom-shadow" : ""
          }`}
        >
          Software Defined Vehicles
        </label>
        <label
          onClick={() => toggleTab(6)}
          className={`text-blue font-bold p-3 px-6 ${
            toggleState === 6 ? "bg-white border-l-8 border-black w-100 shadow-custom-shadow" : ""
          }`}
        >
          Digital Engineering & HPC
        </label>
      </div>

      {/* third Content Component */}
      <div className="m-5">
        {/* tab 1 */}
        <div className={toggleState === 1 ? "" : "hidden"}>
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
            
            <Link to={'/connected_vehicle'}>See more</Link>
          </button>
        </div>

        {/* tab 2 */}
        <div className={toggleState === 2 ? "" : "hidden"}>
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
        <div className={toggleState === 3 ? "" : "hidden"}>
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
        <div className={toggleState === 4 ? "" : "hidden"}>
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
        <div className={toggleState === 5 ? "" : "hidden"}>
          <h4 className="font-bold text-blue">Software Defined Vehicle</h4>
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

        {/* tab 6 */}
        <div className={toggleState === 6 ? "" : "hidden"}>
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
