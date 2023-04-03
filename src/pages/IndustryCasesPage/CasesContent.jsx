import { Cases } from "constants";
import React from "react";

const CasesContent = () => {
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <h4 className="font-semibold py-6 text-blue">Featured Resources</h4>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-8 text-gray">
          {/*  */}
          <div>
            <text className="font font-semibold text-lg">Decision Makers :</text>
            <ul className="list-disc mx-6">
              <li>Primary: Chief Operations Officer, Chief Executive Officer </li>
              <li>Secondary (Influencers): Head of Quality Control, Head of Factory Operations</li>
           
            </ul>
          </div>
          {/*  */}
          {/*  */}
          <div>
            <text className="font font-semibold text-lg">Decision Making Factors :</text>
            <ul className="list-disc mx-6">
              <li> Ease of setup </li>
              <li>Ability to leverage current infrastructure</li>
              <li> Cost</li>
            </ul>
          </div>
          {/*  */}
          {/*  */}
          <div>
            <text className="font font-semibold text-lg"> Desired Business Objectives:</text>
            <ul className="list-disc mx-6">
              <li>Better quality assurance pass rates</li>
              <li> Higher output/yield</li>
              <li> Reduced scrap and operational costs</li>
            </ul>
          </div>
          {/*  */}
          {/*  */}
          <div>
            <text className="font font-semibold text-lg">Customer Pain Points:</text>
            <ul className="list-disc mx-6">
              <li>Poor quality control</li>
              <li> High defective rates (lower than expected product yield)</li>
              <li> High inventory scrap costs</li>
            </ul>
          </div>
          {/*  */}
          {/*  */}
          <div>
            <text className="font font-semibold text-lg">Other Notable Attributes:</text>
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
            <text className="font font-semibold text-lg"> Proposed Technical Solution:</text>
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
          {/*  */}
        </div>

        <div className="flex flex-col gap-10">
          {/* second side */}

          <div className="flex flex-col">
            <text className="font-medium">Industries : Manufacturing</text>
            <text className="font-medium">Geography : AMER - US, Canada</text>
            <text className="font-medium">Size : </text>
            <text className="font-medium">Market Cap : $0.5B to $1.0B # of Employees: 500-10,000</text>
            <text className="font-medium">Budget : $10,000 per month </text>
          </div>

          <div>
            <img className="w-[80%]" src={Cases} alt="cases" />
            <p className="text-center w-[80%] pt-1 font-bold text-gray">Buisness Architecture: Automated Quality Inspection</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CasesContent;
