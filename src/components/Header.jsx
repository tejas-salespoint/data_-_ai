import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div className="w-full shadow-main-navbar-shadow h-[25rem] bg-img-banner bg-no-repeat bg-cover flex flex-col justify-center pl-24">
      <h1 className="font-bold text-white">{title}</h1>
      <h4 className="font-semibold text-white">{subtitle}</h4>
    </div>
  );
};

export default Header;
