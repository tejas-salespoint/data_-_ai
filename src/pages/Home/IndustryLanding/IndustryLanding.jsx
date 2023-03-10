import React from "react";
import Industry from "../../../assets/home/industry/industry.png";
import arrow from "../../../assets/home/industry/arrow.png";

const IndustryLanding = () => {
  const industry = [
    "HealthCare",
    "Manufacturing",
    "Automobile",
    "financial services",
    "government",
    "horizontal",
    "media",
  ];
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <h4 className="font-semibold py-6">Industry Landing</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {industry.map((indus) => (
          <div className="flex flex-row  justify-center items-center bg-[#E8F0FE]  ">
            <div className="flex flex-grow  p-5 items-center gap-3">
              <img className="h-20" src={Industry} alt="industry" />
              <h5 className="uppercase font-semibold">{indus}</h5>
            </div>
            <div className="flex ml-auto bg-blue h-full px-2  justify-center items-center">
              <img className="h-6" src={arrow} alt="arrow" />
            </div>
          </div>
        ))}

        <div className="flex justify-center items-center bg-[#E8F0FE]">
          <div className="flex flex-grow  p-5 justify-center items-center gap-3">
            <h5 className="uppercase font-semibold">See More</h5>
          </div>
          <div className="flex ml-auto bg-blue h-full px-5  justify-center items-center">
            <img className="h-10" src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryLanding;
