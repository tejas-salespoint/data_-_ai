import { Cases } from "constants";
import React from "react";
import { Link } from "react-router-dom";
import Companies from "./Companies";

const CasesContent = () => {
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <div className="grid grid-cols-3 gap-10">
        <div className="flex flex-col gap-8 text-gray">
          <h4 className="font-semibold pt-6 text-blue">Key Highlights</h4>
          {/*  */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <text className="font font-semibold text-lg">
                Decision Makers :
              </text>
              <ul className="list-disc mx-6">
                <li>
                  Primary: Chief Operations Officer, Chief Executive Officer{" "}
                </li>
                <li>
                  Secondary (Influencers): Head of Quality Control, Head of
                  Factory Operations
                </li>
              </ul>
            </div>
            {/*  */}
            {/*  */}
            <div>
              <text className="font font-semibold text-lg">
                Decision Making Factors :
              </text>
              <ul className="list-disc mx-6">
                <li> Ease of setup </li>
                <li>Ability to leverage current infrastructure</li>
                <li> Cost</li>
              </ul>
            </div>
            {/*  */}
            {/*  */}
            <div>
              <text className="font font-semibold text-lg">
                {" "}
                Desired Business Objectives:
              </text>
              <ul className="list-disc mx-6">
                <li>Better quality assurance pass rates</li>
                <li> Higher output/yield</li>
                <li> Reduced scrap and operational costs</li>
              </ul>
            </div>
            {/*  */}
            {/*  */}
            <div>
              <text className="font font-semibold text-lg">
                Customer Pain Points:
              </text>
              <ul className="list-disc mx-6">
                <li>Poor quality control</li>
                <li>
                  {" "}
                  High defective rates (lower than expected product yield)
                </li>
                <li> High inventory scrap costs</li>
              </ul>
            </div>
            {/*  */}
            {/*  */}

            {/*  */}
          </div>

          <div>
            <text className="font font-semibold text-lg">
              Other Notable Attributes:
            </text>
            <ul className="list-disc mx-6">
              <li>
                Reputation in the industry as a SaaS Leader or Adopter in
                Manufacturing
              </li>
            </ul>
          </div>
          {/*  */}
          {/*  */}
          <div>
            <text className="font font-semibold text-lg">
              {" "}
              Proposed Technical Solution:
            </text>
            <ul className="list-disc mx-6">
              <li>
                Solution powered by Cognitive Services and Machine Learning to
                address the issues of anomaly detection, production efficiency,
                defect causality, and product quality for every production lot.
                KPI dashboards and user experience built in RowerB with Azure
                OpenAl integration to generate contextual summary reports in
                desired format based on queries.
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            margin: "0 5rem",
          }}
          className=""
        >
          {/* second side */}
          <div className="flex flex-col gap-10   ">
            <h4 className="font-semibold pt-6 text-blue">
              Ideal Customer Profile
            </h4>

            <div className="flex flex-col">
              <text className="font-medium">Industries : Manufacturing</text>
              <text className="font-medium">Geography : AMER - US, Canada</text>
              <text className="font-medium">Size : </text>
              <text className="font-medium">
                Market Cap : $0.5B to $1.0B # of Employees: 500-10,000
              </text>
              <text className="font-medium">Budget : $10,000 per month </text>
            </div>

            <div className="flex justify-end  text-center  flex-col">
              <img className="w-[100%]" src={Cases} alt="cases" />
              <p className="text-center  pt-1 font-bold text-gray">
                Refer to{" "}
                <Link
                  to={
                    "https://apps.powerapps.com/play/e/839eace6-59ab-4243-97ec-a5b8fcc104e4/a/650ccba3-1876-4884-ac90-3eeb9e2b54ca?tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47"
                  }
                  target="_blank"
                >
                  <span className="text-blue">Manufacturing Kit</span>
                </Link>{" "}
                for more details
              </p>
            </div>
          </div>
        </div>

        <Companies />
      </div>
    </section>
  );
};

export default CasesContent;
