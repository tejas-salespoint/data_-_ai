import Header from "components/Header";
import React from "react";
import CatalystOption from "./CatalystOption/CatalystOption";
import CatalystOverview from "./CatalystOverview/CatalystOverview";

const Catalyst = () => {
  return (
    <>
      <Header title={"Catalyst Jumpstart Sales Kits"} />
      <CatalystOverview />
      <CatalystOption />
    </>
  );
};

export default Catalyst;
