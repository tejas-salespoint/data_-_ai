import React from "react";
import Industry from "../../../assets/home/industry/industry.png";
import arrow from "../../../assets/home/industry/arrow.png";
import { Link } from "react-router-dom";

const IndustryLanding = () => {
  const industry = [
    "Automobile",
    "Financial Services",
    "Government",
    "Healthcare",
    "Horizontal",
    "Manufacturing",
    "Retail",
  ];
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <h4 className="font-semibold py-6">Industry Landing</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {industry.map((indus) => (
          <Link to={'/industry'}>
            <div className="group flex border-2 border-blue hover:border-0 hover:bg-blue hover:text-white  flex-row  justify-center items-center   ">
              <div className="flex flex-grow  p-5 items-center gap-3">
                <img
                  className="h-20 border-4 border-blue group-hover:border-black  rounded-full "
                  src={Industry}
                  alt="industry"
                />
                <h5 className="uppercase font-bold self-center text-blue group-hover:text-white text-center">
                  {indus}
                </h5>
              </div>
            </div>
          </Link>
        ))}

        <div className="group flex border-2 border-blue justify-center items-center hover:border-0 hover:text-white hover:bg-blue ">
          <Link to={"industry_grid"}>
            <div className="flex flex-grow  p-5 justify-center items-center gap-3">
              <h5 className="uppercase font-bold text-blue group-hover:text-white">
                All Industries
              </h5>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustryLanding;
