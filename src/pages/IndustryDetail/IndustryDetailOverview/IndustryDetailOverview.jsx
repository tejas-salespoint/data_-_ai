import React from "react";
import { Link } from "react-router-dom";

export default function IndustryDetailOverview() {
  return (
    <section className="mx-10 my-10  md:mx-32 md:my-10">
      <h4 className="font-semibold py-6">Overview</h4>
      <div className="flex flex-col gap-6">
        <p className="font-bold">Business Application Industry Content</p>
        <p>
          Every industry is facing transformational change and we have a
          strategic opportunity in Business Applications to drive long lasting
          impact and change for our customers. Industry customers are facing
          more challenges than ever before and need a partner to help them use
          technology as their key to success. To engage effectively, we need to
          leverage the industry value propositions we have at Microsoft and pair
          them with a Business Applications point of view, The assets in this
          section will help you demonstrate to customers that you understand
          their challenges and how to address them with industry-specific
          solutions.
        </p>
        <p>
          To learn more about all public and commercial sector industries and
          drive effective
        </p>
        <p>
          conversations with your customers visit the{" "}
          <Link
            to={
              "https://microsofteur.sharepoint.com/:li:/t/HQDataAIIndustryTeam/E4pr_KeHoqdMhUs9qUtAMDoBwc_NeXTfjE9K0aDdailwyA?e=fK2Olm"
            }
            target="_blank"
            className="text-cyan-600"
          >
            here{" "}
          </Link>
          .
        </p>
       
      </div>
    </section>
  );
}
