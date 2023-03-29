import React from "react";
import arrow from "../../../assets/home/industry/arrow.png";

import { Link } from "react-router-dom";
import { featuredResourcesData } from "data/homeData";

const FeaturedResources = () => {
  return (
    <>
      {/* <section className="mx-10 my-10  md:mx-32 md:my-10">
        <h4 className="font-semibold py-6">Featured resources</h4>
        <div className="flex  flex-row gap-4 h-full">
          <div className="flex-grow ">
            <img className="h-auto w-full" src={featured_1} alt="text" />
            <div className="flex justify-between bg-blue p-3 text-white font-semibold">
              <h5>Business Applications / Collaborative Apps </h5>
              <div className="flex  px-2  justify-center items-center">
                <img className="h-6" src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="row-span-2 ">
            <img className="h-auto w-full" src={featured_3} alt="text" />
            <div className="flex justify-between bg-blue p-3 text-white font-semibold">
              <h5>Microsoft Ignite </h5>
              <div className="flex px-2  justify-center items-center">
                <img className="h-6" src={arrow} alt="arrow" />
              </div>
            </div>
          </div>

          dual row col
          <div className="flex flex-col justify-between">
            <div className="row-span-1 relative h-[48%]">
              <img className="h-auto " src={featured_2} alt="text" />
              <div className="flex justify-between bg-blue p-3 text-white font-semibold absolute bottom-0 w-full">
                <h5>NEW! Microsoft Viva Sales </h5>
                <div className="flex  px-2  justify-center items-center ">
                  <img className="h-6" src={arrow} alt="arrow" />
                </div>
              </div>
            </div>
            <div className="row-span-1 relative h-[48%]">
              <img className="h-auto " src={featured_4} alt="text" />
              <div className="flex justify-between bg-blue p-3 text-white font-semibold absolute bottom-0 w-full">
                <h5>FY23 Solution Plays</h5>
                <div className="flex  px-2  justify-center items-center ">
                  <img className="h-6" src={arrow} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* New Design */}
      {/* <section className="mx-10 my-10  md:mx-32 md:my-10">
        <h4 className="font-semibold py-6">Featured resources</h4>
        <div className="grid grid-cols-3 grid-rows-3 gap-4  ">
          <div className="flex-grow col-span-2 row-span-2  relative">
            <img className="h-auto w-full" src={featured_1} alt="text" />
            <div className="flex justify-between bg-blue p-8 text-white font-semibold absolute bottom-0 w-full">
              <h5>Azure OpenAI on GearUp</h5>
              <div className="flex  px-2  justify-center items-center">
                <img className="h-6" src={arrow} alt="arrow" />
              </div>
            </div>
          </div>

          dual row col

          <div className="row-span-1 relative ">
            <img className="h-auto " src={featured_2_1} alt="text" />
            <div className="flex justify-between bg-blue p-6 text-white font-semibold absolute bottom-0 w-full">
              <h5>D&AI Leadership Top of Mind (Zia's Monthly) </h5>
              <div className="flex  px-2  justify-center items-center ">
                <img className="h-6" src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          
          <div className="row-span-1 relative ">
            <img className="h-auto " src={featured_2_2} alt="text" />
            <div className="flex justify-between bg-blue p-6 text-white font-semibold absolute bottom-0 w-full">
              <h5>FY24 Solution Plays</h5>
              <div className="flex  px-2  justify-center items-center ">
                <img className="h-6" src={arrow} alt="arrow" />
              </div>
            </div>
          </div>

          <div className="row-span-1 relative h-full">
            <img className="h-auto " src={featured_4} alt="text" />
            <div className="flex justify-between bg-blue p-6 text-white font-semibold absolute  w-full">
              <h5>D&AI Learning & Development Resources</h5>
              <div className="flex  px-2  justify-center items-center ">
                <img className="h-6" src={arrow} alt="arrow" />
              </div>
            </div>
          </div>

          <div className="row-span-1 relative h-full">
            <img className="h-auto " src={featured_4} alt="text" />
            <div className="flex justify-between bg-blue p-6 text-white font-semibold absolute  w-full">
              <h5>D&AI Dream Demos</h5>
              <div className="flex  px-2  justify-center items-center ">
                <img className="h-6" src={arrow} alt="arrow" />
              </div>
            </div>
          </div>

          <div className="row-span-1 relative h-full">
            <img className="h-auto " src={featured_4} alt="text" />
            <div className="flex justify-between bg-blue p-6 text-white font-semibold absolute  w-full">
              <h5>DAI Megamap</h5>
              <div className="flex  px-2  justify-center items-center ">
                <img className="h-6" src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Todo :: Updated  */}
      <section className="mx-10 my-10  md:mx-32 md:my-10">
        <h4 className="font-semibold py-6">Featured resources</h4>
        <div className="grid grid-cols-3 grid-rows-2 gap-5 ">
          {featuredResourcesData.map((feature) => (
            <div key={feature.id} className="row-span-1 relative">
              <img className="h-auto " src={feature?.img} alt="text" />
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
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturedResources;
