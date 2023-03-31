import { Cases } from "constants";
import React from "react";

const CasesContent = () => {
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <h4 className="font-semibold py-6 text-blue">Featured Resources</h4>
      <div className="flex justify-between">
        <div>
          {/*  */}
          <div>
            <h5>Decision Makers :</h5>
            <ul>
              <li> Ease of setup </li>
              <li>Ability to leverage current infrastructure</li>
              <li> Cost</li>
            </ul>
          </div>
          {/*  */}
          {/*  */}
          <div>
            <h5> Desired Business Objectives:</h5>
            <ul>
              <li>Better quality assurance pass rates</li>
              <li> Higher output/yield</li>
              <li> Reduced scrap and operational costs</li>
            </ul>
          </div>
          {/*  */}
          {/*  */}
          <div>
            <h5>Customer Pain Points:</h5>
            <ul>
              <li>Poor quality control</li>
              <li> High defective rates (lower than expected product yield)</li>
              <li> High inventory scrap costs</li>
            </ul>
          </div>
          {/*  */}
          {/*  */}
          <div>
            <h5>Other Notable Attributes:</h5>
            <ul>
              <li>
                Reputation in the industry as a SaaS Leader or Adopter in
                Manufacturing
              </li>
            </ul>
          </div>
          {/*  */}
          {/*  */}
          <div>
            <h5> Proposed Technical Solution:</h5>
            <ul>
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

          <div>
            <h5>Industries : Manufacturing</h5>
            <h5>Geography : AMER - US, Canada</h5>
            <h5>Size : </h5>
            <h5>Market Cap : $0.5B to $1.0B # of Employees: 500-10,000</h5>
            <h5>Budget : $10,000 per month </h5>
          </div>

          <div>
            <img src={Cases} alt="cases" />
            <p>Buisness Architecture: Automated Quality Inspection</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CasesContent;
