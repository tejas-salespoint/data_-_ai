import React from "react";

const IndustryGrids = () => {
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <h4 className="font-semibold py-6">Industry Landing</h4>
      <div className="grid grid-cols-4 grid-rows-3 gap-4">
        {[...Array(12)].map((item) => (
          <div className="flex items-center bg-blue justify-center h-60 w-full">
            <h5 className="font-bold text-white">Media</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustryGrids;
