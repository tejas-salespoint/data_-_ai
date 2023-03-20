import { Avatar } from "constants";
import React from "react";

const Footer = () => {
  return (
    <section className=" md:px-32 md:py-10 bg-light-blue">

     <h3 className="font-semibold pb-8 text-blue">Our Team</h3>
      <div className="flex justify-evenly ">
        <div className="flex  flex-col gap-3 items-center p-8 px-14 border-2 bg-white border-blue">
          <img className="h-40 w-40 shadow-avatar-shadow rounded-full" src={Avatar} alt="avatar" />
          <div className="flex flex-col gap-1 items-center">
            <h5 className="font-bold">Anial Drian</h5>
            <p className="text-sgray">anial.drian@microsoft.com</p>
            <p className="text-sgray">+1-1234567890</p>
          </div>
        </div>

        <div className="flex  flex-col gap-3 items-center p-8 px-14 border-2 bg-white border-blue">
          <img className="h-40 w-40 shadow-avatar-shadow rounded-full" src={Avatar} alt="avatar" />
          <div className="flex flex-col gap-1 items-center">
            <h5 className="font-bold">Anial Drian</h5>
            <p className="text-sgray">anial.drian@microsoft.com</p>
            <p className="text-sgray">+1-1234567890</p>
          </div>
        </div>

        <div className="flex  flex-col gap-3 items-center p-8 px-14 border-2 bg-white border-blue">
          <img className="h-40 w-40 shadow-avatar-shadow rounded-full" src={Avatar} alt="avatar" />
          <div className="flex flex-col gap-1 items-center">
            <h5 className="font-bold">Anial Drian</h5>
            <p className="text-sgray">anial.drian@microsoft.com</p>
            <p className="text-sgray">+1-1234567890</p>
          </div>
        </div>

        <div className="flex  flex-col gap-3 items-center p-8 px-14 border-2 bg-white border-blue">
          <img className="h-40 w-40 shadow-avatar-shadow rounded-full" src={Avatar} alt="avatar" />
          <div className="flex flex-col gap-1 items-center">
            <h5 className="font-bold">Anial Drian</h5>
            <p className="text-sgray">anial.drian@microsoft.com</p>
            <p className="text-sgray">+1-1234567890</p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Footer;
