import React from "react";
import Edge from "assets/edge.png";
import { Industry } from "data/Industry/Industry_data";
import {Link} from "react-router-dom";

const CatalystOption = () => {
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10 bg-light-blue">
      <div className="grid grid-cols-4 grid-rows-2 p-8 gap-10">

        {Industry.map((industry) => (
          <div className="flex flex-col gap-5">
            <label className="font-bold text-2xl">{industry?.title}</label>
            <ul className="flex flex-col gap-2">
              {industry?.solution_plays[
                industry.solution_plays.length - 1
              ].use_cases.map((item) => (


                <li >
                    <Link to={`/industry/${industry?.link}/${item?.solution_play}/${item?.title}`} className="flex gap-2 font-medium items-center">
                    <img className="h-5" src={Edge} alt="edge" />
                        <p>
                            {item?.title}
                        </p>

                  </Link>
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
