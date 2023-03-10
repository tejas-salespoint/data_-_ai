import React from "react";
import Header from "../../components/Header";
import AdditionalResources from "./AdditionalResources/AdditionalResources";
import FeaturedResources from "./FeaturedResources/FeaturedResources";
import IndustryLanding from "./IndustryLanding/IndustryLanding";

const Home = () => {
  return (
    <div>
      <Header title={'Data & AI Hub'} subtitle={'We think these resources will be helpful as you work with your customers.'} />
      <FeaturedResources />
      <IndustryLanding />
      <AdditionalResources />
    </div>
  );
};

export default Home;
