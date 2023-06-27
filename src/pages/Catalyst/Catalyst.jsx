import Header from "components/Header";
import React from "react";
import CatalystOption from "./CatalystOption/CatalystOption";
import CatalystOverview from "./CatalystOverview/CatalystOverview";

const Catalyst = () => {
  return (
    <>
      <Header title={"DAI Ind. Use Cases"} />
      <CatalystOverview />
      <CatalystOption />
    </>
  );
};

export default Catalyst;
