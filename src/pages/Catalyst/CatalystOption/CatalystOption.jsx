import React from "react";
import Edge from "assets/edge.png";
import { Industry } from "data/Industry/Industry_data";

const CatalystOption = () => {
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10 bg-light-blue">
      <div className="grid grid-cols-4 grid-rows-2 p-8 gap-10">
        {/* grid 1 */}
        {/* <div className="flex flex-col gap-5">
          <h4 className="text-blue font-medium">Option 1</h4>
         
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2 items-start">
              <img className="h-5 mt-1" src={Edge} alt="edge" />
              All-in-One Digital Contact Center (Cross Ind.) Data Management to
              Create a 360 View{" "}
            </li>
            <li className="flex gap-2 items-center">
              <img className="h-5" src={Edge} alt="edge" />
              RETAIL/FSI/HEALTH
            </li>
          </ul>
        </div> */}

        {/* grid 2 */}
        {Industry.map((industry) => (
          <div className="flex flex-col gap-5">
            <label className="font-bold">{industry?.title}</label>
            <ul className="flex flex-col gap-2">
              {industry?.solution_plays[
                industry.solution_plays.length - 1
              ].use_cases.map((item) => (
                <li className="flex gap-2 items-center">
                  <img className="h-5" src={Edge} alt="edge" />
                  {item?.title}
                </li>
              ))}
             
            </ul>
          </div>
        ))}

      </div>
    </section>
  );
};

export default CatalystOption;
