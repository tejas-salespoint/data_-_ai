import React from "react";
import { Link } from "react-router-dom";

const AutomobileOverview = () => {
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <h4 className="font-semibold py-6">Automotive Overview</h4>
      <div className="flex flex-col gap-6">
        {/* <p className="font-bold">Business Application Industry Content</p> */}
        <p>
        The market for the movement of people and goods is one of the largest and most dynamic ecosystems globally which represents $6T in global revenues today and is projected to grow to $11T by 2030 (~6% CAGR). This shift is disrupting the ecosystem, creating the opportunity for new market entrants to become future market leaders and driving traditional players to partner with technology providers who can help them reinvent their business models and deliver next generation experiences across automotive, mobility, and transportation. While we represent these industry trends separately, the alignment of automotive, mobility, and transportation was purposeful as the lines between each continue to converge.
        </p>
        {/* <p>
          To learn more about all public and commercial sector industries and
          drive effective
        </p> */}
        {/* <p>
          conversations with your customers visit the <Link to={'https://microsofteur.sharepoint.com/:li:/t/HQDataAIIndustryTeam/E4pr_KeHoqdMhUs9qUtAMDoBwc_NeXTfjE9K0aDdailwyA?e=fK2Olm'} target='_blank' className="text-cyan-600">here </Link>.
        </p> */}
        {/* <p>Priority Industries for Business Applications</p>
        <ul className="list-disc ml-5 font-medium">
          <li>Healthcare</li>
          <li>Manufacturing</li>
          <li>Retail</li>
          <li>Financial Services</li>
          <li>Government</li>
        </ul> */}
      </div>
    </section>
  );
};

export default AutomobileOverview;
