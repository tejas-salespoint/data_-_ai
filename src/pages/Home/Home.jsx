import React from "react";
import Header from "../../components/Header";
import AdditionalResources from "./AdditionalResources/AdditionalResources";
import FeaturedResources from "./FeaturedResources/FeaturedResources";
import IndustryLanding from "./IndustryLanding/IndustryLanding";

const Home = () => {
  return (
    <div>
      <Header />
      <FeaturedResources />
      <IndustryLanding />
      <AdditionalResources />
    </div>
  );
};

export default Home;
