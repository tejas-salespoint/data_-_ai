import { Cases } from "constants";
import React from "react";
import { Link } from "react-router-dom";
import Companies from "./Companies";

const CasesContent = ({usecase}) => {
    usecase = usecase?.use_cases_content[0]
    console.log(usecase)
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <div className="grid grid-cols-3 gap-10">
        <div className="flex flex-col gap-8 text-gray">
          <h4 className="font-semibold pt-6 text-blue">Key Highlights</h4>
          {/*  */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font font-semibold text-lg">
                Decision Makers :
             </p>
              <ul className="list-disc mx-6">
                  {
                      usecase?.keyHighlights?.decision_makers.map(item => (
                          <li>
                              {item}
                          </li>
                      ))
                  }
           
              </ul>
            </div>
            {/*  */}
            {/*  */}
            <div>
              <p className="font font-semibold text-lg">
                Decision Making Factors :
             </p>
              <ul className="list-disc mx-6">
                  {
                      usecase?.keyHighlights?.decision_making_factors.map(item => (
                          <li>
                              {item}
                          </li>
                      ))
                  }

              </ul>
            </div>
            {/*  */}
            {/*  */}
            <div>
              <p className="font font-semibold text-lg">
                {" "}
                Desired Business Objectives:
             </p>
              <ul className="list-disc mx-6">
                  {
                      usecase?.keyHighlights?.desired_business_objectives.map(item => (
                          <li>
                              {item}
                          </li>
                      ))
                  }
                {/*<li>Better quality assurance pass rates</li>*/}
                {/*<li> Higher output/yield</li>*/}
                {/*<li> Reduced scrap and operational costs</li>*/}
              </ul>
            </div>
            {/*  */}
            {/*  */}
            <div>
              <p className="font font-semibold text-lg">
                Customer Pain Points:
             </p>
              <ul className="list-disc mx-6">
                  {
                      usecase?.keyHighlights?.customer_pain_points.map(item => (
                          <li>
                              {item}
                          </li>
                      ))
                  }
              
              </ul>
            </div>
         
          </div>


            <div className={'grid grid-cols-2 gap-4'}>


          <div>
            <p className="font font-semibold text-lg">
              Other Notable Attributes:
           </p>
            <ul className="list-disc mx-6">
                {
                    usecase?.keyHighlights?.other_notable_attributes?.map(item => (
                        <li>
                            {item}
                        </li>
                    ))
                }
              
            </ul>
          </div>

          <div>
            <p className="font font-semibold text-lg">
              {" "}
              Proposed Technical Solution:
           </p>
            <ul className="list-disc mx-6">
                {
                    usecase?.keyHighlights?.proposed_technical_solution.map(item => (
                        <li>
                            {item}
                        </li>
                    ))
                }
             
            </ul>
          </div>

            </div>
            <div>


            <p className="font font-semibold text-lg">
              {" "}
                Products/Tech Stack:
           </p>
            <ul className="list-disc mx-6">
                {
                    usecase?.keyHighlights?.products?.map(item => (
                        <li>
                            {item}
                        </li>
                    ))
                }
             
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
              <p className="font-medium">Industries : { usecase?.idealCostomerProfile?.industries }</p>
              <p className="font-medium">Geography : </p>
              <p className="font-medium">Market Cap :</p>
              <p className="font-medium"># of Employees : </p>
              <p className="font-medium">Budget/Month :</p>
            </div>

            <div className="flex justify-end  text-center  flex-col">
                {
                    usecase?.idealCostomerProfile?.image &&   <img className="w-[100%]" src={usecase?.idealCostomerProfile?.image} alt="cases" />
                }

                <Link>
                    <p className="text-center  pt-1 font-bold text-blue">
                        { usecase?.idealCostomerProfile?.image_subtitle }
                    </p>
                </Link>

            </div>
          </div>
        </div>

        <Companies />
      </div>
    </section>
  );
};

export default CasesContent;
