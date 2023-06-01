import React from "react";

const IndustryOverview = ({ activeIndustryData }) => {
  const industry = activeIndustryData;

  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <h4 className="font-semibold py-6 text-blue">{industry?.heading}</h4>
      <div className="flex flex-col gap-6">
        {/* <p className="font-bold">Business Application Industry Content</p> */}
        <p>{industry?.overview}</p>
      </div>
    </section>
  );
};

export default IndustryOverview;
