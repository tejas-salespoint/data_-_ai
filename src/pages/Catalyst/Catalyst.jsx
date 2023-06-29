import Header from "components/Header";
import React from "react";
import CatalystOption from "./CatalystOption/CatalystOption";
import CatalystOverview from "./CatalystOverview/CatalystOverview";

const Catalyst = () => {
  return (
    <>
      <Header title={"All Data & AI Industry Use Cases"} subtitle={'DAI Industry Assets & Resources to help you accelerate customer opportunities'} />
      <CatalystOverview />
      <CatalystOption />
    </>
  );
};

export default Catalyst;
