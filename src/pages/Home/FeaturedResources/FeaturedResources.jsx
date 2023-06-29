import React from "react";
import arrow from "../../../assets/home/industry/arrow.png";

import { Link } from "react-router-dom";
import { featuredResourcesData } from "data/homeData";

const FeaturedResources = () => {
  return (
    <>

      {/* Todo :: Updated  */}
      <section className="mx-10 my-10  md:mx-32 md:my-10">
        <h4 className="font-semibold pb-6 text-blue">Featured Resources</h4>

        <div className="grid grid-cols-3 grid-rows-2 gap-5 ">
          {featuredResourcesData.map((feature) => (
            <div key={feature.id} className="row-span-1 relative ">
              <Link to={feature?.link} target={feature?.target}>
                <img className=" h-[88%] w-full" src={feature?.img} alt="text" />
                <div className="flex justify-between bg-blue p-3  text-white font-semibold absolute bottom-0 w-full">
                  <Link to={feature?.link} target={feature?.target}>
                    <h5>{feature?.title} </h5>
                  </Link>
                  <div className="flex  px-2  justify-center items-center">
                    <Link to={feature?.link} target={feature?.target}>
                      <img className="h-6" src={arrow} alt="arrow" />
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturedResources;
