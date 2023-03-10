import React from "react";
import additionalImg1 from "../../../assets/home/additional/15 1.png";
import additionalImg2 from "../../../assets/home/additional/14 1.png";
import additionalImg3 from "../../../assets/home/additional/13 1.png";
import additionalImg4 from "../../../assets/home/additional/12 2.png";

const AdditionalResources = () => {
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <h4 className="font-semibold py-6">Additional resources</h4>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Additional 1 */}
        <div className="flex flex-col items-center justify-center border-spacing-4  border border-slate-400 p-5 ">
          <img className="h-20 p-2 " src={additionalImg1} alt="additional_1" />
          <h5 className="font-bold p-3 ">Industry vertical Cheat Sheets</h5>
          <p className="text-center space-y-3">
            Microsoft FastTrack for Dynamics 365 is our customer success service
            designed to help your customers implement and go live so they can
            realize business value faster.
          </p>
          <button className="border-4 border-slate-400 px-5 py-2 m-3 border-blue-500 font-extrabold rounded-full text-blue">
            View details
          </button>
        </div>

        {/* additional 2 */}
        <div className="flex flex-col items-center justify-center border-spacing-4  border border-slate-400 p-5 ">
          <img className="h-20 p-2 " src={additionalImg2} alt="additional_2" />
          <h5 className="font-bold p-3 ">Industry vertical Cheat Sheets</h5>
          <p className="text-center space-y-3">
            Microsoft FastTrack for Dynamics 365 is our customer success service
            designed to help your customers implement and go live so they can
            realize business value faster.
          </p>
          <button className="border-4 border-slate-400 px-5 py-2 m-3 border-blue-500 font-extrabold rounded-full text-blue">
            View details
          </button>
        </div>

        {/* additional 3 */}
        <div className="flex flex-col items-center justify-center border-spacing-4  border border-slate-400 p-5 ">
          <img className="h-20 p-2 " src={additionalImg3} alt="additional_3" />
          <h5 className="font-bold p-3 ">NEW: 100 Compete Resources</h5>
          <p className="text-center space-y-3">
          Microsoft FastTrack for Dynamics 365 is our customer success service
            designed to help your customers implement and go live so they can
            realize business value faster.
          </p>
          <button className="border-4 border-slate-400 px-5 py-2 m-3 border-blue-500 font-extrabold rounded-full text-blue">
            View details
          </button>
        </div>

        {/* additional 4 */}
        <div className="flex flex-col items-center justify-center border-spacing-4  border border-slate-400 p-5 ">
          <img className="h-20 p-2 " src={additionalImg4} alt="additional_14" />
          <h5 className="font-bold p-3 ">Industry vertical Cheat Sheets</h5>
          <p className="text-center space-y-3">
            Microsoft FastTrack for Dynamics 365 is our customer success service
            designed to help your customers implement and go live so they can
            realize business value faster.
          </p>
          <button className="border-4 border-slate-400 px-5 py-2 m-3 border-blue-500 font-extrabold rounded-full text-blue">
            View details
          </button>
        </div>
        {/* Additoinal 1 end */}
      </div>
    </section>
  );
};

export default AdditionalResources;
