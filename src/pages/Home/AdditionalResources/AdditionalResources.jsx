import React from "react";
import additionalImg1 from "../../../assets/home/additional/15 1.png";
import additionalImg2 from "../../../assets/home/additional/14 1.png";
import additionalImg3 from "../../../assets/home/additional/13 1.png";
import additionalImg4 from "../../../assets/home/additional/12 2.png";
import { Link } from "react-router-dom";

const AdditionalResources = () => {
  const resources = [
    {
      id: 1,
      title: `DAI Industry Solution \n Maps`,
      icon: additionalImg1,
      desc: "Microsoft FastTrack for Dynamics 365 is our customer success service designed to help your customers implement and go live so they can realize business value faster.",
      link: "",
    },
    {
      id: 2,
      title: "DAI L100-L200 BDM/TDM Decks",
      icon: additionalImg2,
      desc: "Microsoft FastTrack for Dynamics 365 is our customer success service designed to help your customers implement and go live so they can realize business value faster.",
      link: "",
    },
    {
      id: 3,
      title: "DAI Learning & Development on Viva",
      icon: additionalImg3,
      desc: "Microsoft FastTrack for Dynamics 365 is our customer success service designed to help your customers implement and go live so they can realize business value faster.",
      link: "",
    },
    {
      id: 4,
      title:"Latest Azure OpenAI \n Guidance",
      icon: additionalImg4,
      desc: "Microsoft FastTrack for Dynamics 365 is our customer success service designed to help your customers implement and go live so they can realize business value faster.",
      link: "",
    },
  ];

  return (
    <section className="mx-10 my-10 md:mx-32 md:my-10">
      <h4 className="font-semibold py-6 text-blue">Additional Resources</h4>
      <div className="flex flex-col md:flex-row gap-10">

        {/* Additional 1 */}

        {resources.map((item) => (
          <div className="flex flex-col items-center justify-center border-spacing-4  border border-slate-400 p-5 ">
            <img className="h-20 p-2 " src={item?.icon} alt="additional_1" />
            <text className="font-bold text-blue p-3 flex justify-center text-center">{item?.title}</text>
            <p className="text-center space-y-3">{item?.desc}</p>
            <Link to={item?.link}>
              <button className="border-2 border-slate-400 px-5 py-2 m-3 border-blue-500 font-extrabold rounded-full text-blue">
                View details
              </button>
            </Link>
          </div>
        ))}

        {/* Additoinal 1 end */}
      </div>
    </section>
  );
};

export default AdditionalResources;
