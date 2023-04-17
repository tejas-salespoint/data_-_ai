
import { Automotive_buffer } from "constants";
import { Finance_buffer } from "constants";
import { Healthcare_buffer } from "constants";
import { Manufacturing_buffer } from "constants";
import { Education_buffer } from "constants";
import { Media_buffer } from "constants";
import { Sustainability_buffer } from "constants";
import { Engineering_buffer } from "constants";
import { Retail_buffer } from "constants";
import { Horizantal_buffer } from "constants";
import { Government_buffer } from "constants";
import { Energy_buffer } from "constants";

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const IndustryGrids = () => {


  const AllIndustry = [
    {
      id: "1",
      title: "Automotive",
      link: "",
      img: Automotive_buffer,
    },
    {
      id: "2",
      title: "Energy",
      link: "",
      img: Energy_buffer,
    },
    {
      id: "3",
      title: "Financial Services",
      link: "",
      img: Finance_buffer,
    },
    {
      id: "4",
      title: "Government",
      link: "",
      img: Government_buffer,
    },
    {
      id: "5",
      title: "Healthcare",
      link: "",
      img: Healthcare_buffer,
    },
    {
      id: "6",
      title: "Horizontal",
      link: "",
      img: Horizantal_buffer,
    },
    {
      id: "7",
      title: "Manufacturing",
      link: "",
      img: Manufacturing_buffer,
    },
    {
      id: "8",
      title: "Retail",
      link: "",
      img: Retail_buffer,
    },
  ];
  const CommingSoonIndustry = [
    // comming soon
    {
      id: "9",
      title: "Education",
      link: "",
      img: Education_buffer,
      coming: true,
    },
    {
      id: "10",
      title: "Engineering & Construction",
      link: "",
      img: Engineering_buffer,
      coming: true,
    },

    {
      id: "11",
      title: "Media",
      link: "",
      img: Media_buffer,
      coming: true,
    },

    {
      id: "12",
      title: "Sustainability",
      link: "",
      img: Sustainability_buffer,
      coming: true,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <h4 className="font-semibold text-blue py-6">Industry Landing</h4>
      <div className="grid grid-cols-4 grid-rows-3 gap-4">
        {AllIndustry.map((item) => (
          <div
            key={item?.title}
            className={`group relative flex   bg-cover bg-center bg-no-repeat  items-center  justify-center h-60 w-full  `}
          >
            <img className="h-full w-full" src={item?.img} alt="feature_1" />
            <div>
              <div className="absolute z-10 inset-1 flex justify-center group-hover:hidden items-center font-bold text-white">
                <button className="p-1 text-white bg-blue font-bold  w-[48%]   px-5 rounded-full ">
                  {item?.title}
                </button>
              </div>

              <div className="absolute z-10 inset-1 flex justify-center items-center font-bold text-white">
                <Link to={"/industry/automotive"}>
                
                  <button className="p-1 hidden group-hover:block text-blue bg-white font-bold   px-5 rounded-full ">
                  Learn More
                </button>
                </Link>
              </div>
            </div>
            <div class="absolute inset-0 group-hover:bg-[#242424] group-hover:bg-opacity-[0.7]"></div>
          </div>
        ))}

        {CommingSoonIndustry.map((item) => (
          <div
            className={`group relative flex  bg-cover bg-center bg-no-repeat  items-center bg-blue justify-center h-60 w-full  `}
          >
            <img
              className="h-full w-full blur-sm"
              src={item?.img}
              alt="feature_1"
            />
            <div className="flex flex-col absolute gap-3 z-10 inset-1 justify-center items-center">
             
              <button className="p-1 text-white bg-blue font-bold   w-[65%] rounded-full ">
                  {item?.title}
                </button>
              <div className=" font-bold text-white">
                <Link to={"/industry"}>
                  <button className="p-1 text-blue bg-white  px-5 rounded-full ">
                    Coming Soon
                  </button>
                </Link>
              </div>
            </div>
            <div class="absolute inset-0 bg-[#242424] bg-opacity-[0.7]"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustryGrids;
