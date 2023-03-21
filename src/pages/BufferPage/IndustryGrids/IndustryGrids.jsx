import React from "react";

const IndustryGrids = () => {
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <h4 className="font-semibold py-6">Industry Landing</h4>
      <div className="grid grid-cols-4 grid-rows-3 gap-4">
        {[...Array(12)].map((item) => (
          <div className="relative flex bg-buffer-bg  bg-cover bg-center bg-no-repeat  items-center bg-blue justify-center h-60 w-full hover:mix-blend-darken hover:opacity-[0.7]">
            <h5 className="absolute z-10 inset-1 flex justify-center items-center font-bold text-white">Media</h5>

              <div class="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustryGrids;
