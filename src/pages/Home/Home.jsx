import React from "react";
import Header from "../../components/Header";
import AdditionalResources from "./AdditionalResources/AdditionalResources";
import FeaturedResources from "./FeaturedResources/FeaturedResources";
import IndustryLanding from "./IndustryLanding/IndustryLanding";

const Home = () => {
  return (
    <div>
      <Header title={'Data & AI Industry Hub'} subtitle={'DAI Industry Assets & Resources to help you accelerate customer opportunities.'} />
      <IndustryLanding />
      <FeaturedResources />
      <AdditionalResources />
    </div>
  );
};

export default Home;
