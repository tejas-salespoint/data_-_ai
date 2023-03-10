import React from "react";
import arrow from "../../../assets/home/industry/arrow.png";
import featured_1 from "../../../assets/home/featured/f-1.png";
import featured_2 from "../../../assets/home/featured/f-2.png";
import featured_3 from "../../../assets/home/featured/f-3.png";
import featured_4 from "../../../assets/home/featured/f-4.png";

const FeaturedResources = () => {
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <h4 className="font-semibold py-6">Featured resources</h4>
      <div className="flex  flex-row gap-4 h-full ">
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

        {/* dual row col */}
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
    </section>
  );
};

export default FeaturedResources;
