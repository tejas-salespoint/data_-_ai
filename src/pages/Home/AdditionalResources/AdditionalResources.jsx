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
      title: `Industry Hub`,
      icon: additionalImg1,
      desc: "Microsoft FastTrack for Dynamics 365 is our customer success service designed to help your customers implement and go live so they can realize business value faster.",
      link: "https://industryhub.transform.microsoft.com/",
    },
    {
      id: 2,
      title: "Lead the Era of AI",
      icon: additionalImg2,
      desc: "Microsoft FastTrack for Dynamics 365 is our customer success service designed to help your customers implement and go live so they can realize business value faster.",
      link: "https://transform.microsoft.com/ai-capabilities",
    },
    {
      id: 3,
      title: "Microsoft Tranform",
      icon: additionalImg3,
      desc: "Microsoft FastTrack for Dynamics 365 is our customer success service designed to help your customers implement and go live so they can realize business value faster.",
      link: "https://transform.microsoft.com/",
    },
    {
      id: 4,
      title:"Azure GearUp",
      icon: additionalImg4,
      desc: "Microsoft FastTrack for Dynamics 365 is our customer success service designed to help your customers implement and go live so they can realize business value faster.",
      link: "https://gearup.microsoft.com/",
    },
  ];

  return (
    <section className="mx-10 my-10 md:mx-32 md:my-10">
      <h4 className="font-semibold py-6 text-blue">Additional Resources</h4>
      <div className="grid grid-cols-4 gap-10">



        {resources.map((item) => (
          <div className="flex flex-col items-center justify-center border-spacing-4  border border-slate-400 p-5 ">
            <img className="h-28 p-2 " src={item?.icon} alt="additional_1" />
            <p className="font-bold text-blue p-3 flex justify-center text-center">{item?.title}</p>
            {/*<p className="text-center space-y-3">{item?.desc}</p>*/}
            <Link to={item?.link} target={'_blank'}>
              <button className="border-2 border-blue px-5 py-2 m-3 border-blue-500 hover:bg-blue hover:text-white font-bold rounded-full text-blue">
               Click here to view details
              </button>
            </Link>
          </div>
        ))}


      </div>
    </section>
  );
};

export default AdditionalResources;
