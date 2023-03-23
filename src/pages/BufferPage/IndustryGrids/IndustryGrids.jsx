import { buffer } from "constants";
import React from "react";

const IndustryGrids = () => {
  const AllIndustry = [
    {
      id: "1",
      title: "Media",
      link: "",
      img: "bg-buffer-bg",
    },
    {
      id: "2",
      title: "Media",
      link: "",
      img: "bg-buffer-bg-2",
    },
    {
      id: "3",
      title: "Media",
      link: "",
      img: "bg-buffer-bg",
    },
    {
      id: "4",
      title: "Media",
      link: "",
      img: "bg-buffer-bg-2",
    },
    {
      id: "5",
      title: "Media",
      link: "",
      img: "bg-buffer-bg",
    },
    {
      id: "6",
      title: "Media",
      link: "",
      img: "bg-buffer-bg-2",
    },
    {
      id: "7",
      title: "Media",
      link: "",
      img: "bg-buffer-bg",
    },
    {
      id: "8",
      title: "Media",
      link: "",
      img: "bg-buffer-bg-2",
    },
    {
      id: "9",
      title: "Media",
      link: "",
      img: "bg-buffer-bg",
    },
    {
      id: "10",
      title: "Media",
      link: "",
      img: "bg-buffer-bg-2",
    },
    {
      id: "11",
      title: "Media",
      link: "",
      img: "bg-buffer-bg",
    },
    {
      id: "12",
      title: "Media",
      link: "",
      img: "bg-buffer-bg-2",
    },
  ];
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <h4 className="font-semibold py-6">Industry Landing</h4>
      <div className="grid grid-cols-4 grid-rows-3 gap-4">
        {AllIndustry.map((item) => (
          <div
            style={{
              backgroundImage: buffer,
            }}
            className={`group relative flex ${item?.img}  bg-cover bg-center bg-no-repeat  items-center bg-blue justify-center h-60 w-full  `}
          >
            <h5 className="absolute z-10 inset-1 flex justify-center group-hover:hidden items-center font-bold text-white">
              {item.title}
            </h5>
            <div className="absolute z-10 inset-1 flex justify-center items-center font-bold text-white">
              <button className="border-2 hidden group-hover:block p-3 px-5 rounded-full group-hover:border-white group-hover:text-white">
                Learn More
              </button>
            </div>
            <div class="absolute inset-0 group-hover:bg-[#242424] group-hover:bg-opacity-[0.7]"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustryGrids;
