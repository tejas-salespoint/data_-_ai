import { avatar_1 } from "constants";
import { avatar_3 } from "constants";
import { avatar_5 } from "constants";
import { avatar_7 } from "constants";
import { avatar_6 } from "constants";
import { avatar_4 } from "constants";
import { avatar_2 } from "constants";

import React from "react";

const Teams = () => {
  const teams = [
    {
      avatar : avatar_1,
      name: "Anial Drian",
      email: "anial.drian@microsoft.com",
      phone: "+1-1234567890",
    },
    {
      avatar : avatar_2,
      name: "Anial Drian",
      email: "anial.drian@microsoft.com",
      phone: "+1-1234567890",
    },
    {
      avatar : avatar_3,
      name: "Anial Drian",
      email: "anial.drian@microsoft.com",
      phone: "+1-1234567890",
    },
    {
      avatar : avatar_4,
      name: "Anial Drian",
      email: "anial.drian@microsoft.com",
      phone: "+1-1234567890",
    },
    {
      avatar : avatar_5,
      name: "Anial Drian",
      email: "anial.drian@microsoft.com",
      phone: "+1-1234567890",
    },
    {
      avatar : avatar_6,
      name: "Anial Drian",
      email: "anial.drian@microsoft.com",
      phone: "+1-1234567890",
    },
    {
      avatar : avatar_7,
      name: "Anial Drian",
      email: "anial.drian@microsoft.com",
      phone: "+1-1234567890",
    },
  ];
  return (
    <section className=" md:px-32 md:py-10 bg-light-gray ">
      <h4 className="font-semibold pb-8 text-blue">Key Contacts</h4>

      <div className="grid grid-cols-7 gap-10 ">

      {
        teams.map(team => (
          <div className="flex   flex-col gap-3 items-center   ">
          <img
            className=" h-[50%] shadow-avatar-shadow rounded-full"
            src={team?.avatar}
            alt="avatar"
          />
          <div className="flex flex-col gap-1 items-center">
            <h5 className="font-bold text-blue">{team?.name}</h5>
            <p className="text-sgray">{team?.email}</p>
            <p className="text-sgray">{team?.phone}</p>
          </div>
        </div>
        ))
      }
        
      
      </div>
    </section>
  );
};

export default Teams;
