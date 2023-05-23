import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div className="w-full shadow-main-navbar-shadow h-[13rem] bg-img-banner bg-no-repeat bg-cover flex flex-col justify-center pl-24">
      <h2 className="font-bold text-white">{title}</h2>
      <div className="font-semibold text-white text-2xl">{subtitle}</div>
    </div>
  );
};

export default Header;
