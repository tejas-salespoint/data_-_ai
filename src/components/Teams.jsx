import {avatar_1} from "constants";
import {avatar_3} from "constants";
import {avatar_5} from "constants";
import {avatar_7} from "constants";
import {avatar_6} from "constants";
import {avatar_4} from "constants";
import {avatar_2} from "constants";

import React from "react";
import {Link} from "react-router-dom";
import {
    ana_maria_lopes,
    holly_dickson,
    jeeva_akr,
    jimmy_gill, manaswini_shastri,
    matt_sinclair,
    naveen_raigaga,
    sanjay_shirole,
    sanjay_soni
} from "../constants";

const Teams = () => {
    const teams = [
        {
            avatar: jimmy_gill,
            name: "Jimmy Gill",
            email: "anial.drian@microsoft.com",
            phone: "+1-1234567890",
            role: 'Director, DAI Industry GTM Lead',
            link: "https://whoplus.microsoft.com/?_vwp=true&_vwpAlias=JIMMYGILL",

        },
        {
            avatar: sanjay_shirole,
            name: "Sanjay Shirole",
            email: "anial.drian@microsoft.com",
            phone: "+1-1234567890",
            role: 'Director, DAI Partner Enablement Lead',
            link: "https://whoplus.microsoft.com/?_vwp=true&_vwpAlias=SSHIROLE"
        },
        {
            avatar: sanjay_soni,
            name: "Sanjay Soni",
            email: "anial.drian@microsoft.com",
            phone: "+1-1234567890",
            role: 'Director, DAI Dream Demos & Enablement Lead',
            link: "https://whoplus.microsoft.com/?_vwp=true&_vwpAlias=SSONI"
        },
        {
            avatar: naveen_raigaga,
            name: "Naveen Raigaga",
            email: "anial.drian@microsoft.com",
            phone: "+1-1234567890",
            role: 'Director, DAI Enablement Lead',
            link: "https://whoplus.microsoft.com/?_vwp=true&_vwpAlias=NAVINR"
        },
        {
            avatar: holly_dickson,
            name: "Holly Dickson",
            email: "anial.drian@microsoft.com",
            phone: "+1-1234567890",
            role: 'Sr. Director, DAI Enablment Lead',
            link: "https://whoplus.microsoft.com/?_vwp=true&_vwpAlias=HDICKSON"
        },

    ];

    const other_four = [
        {
            avatar: matt_sinclair,
            name: "Matt Sinclair",
            email: "anial.drian@microsoft.com",
            phone: "+1-1234567890",
            role: 'Director, AI Sales Strategy Lead',
            link: "https://whoplus.microsoft.com/?_vwp=true&_vwpAlias=MASINCLA"
        },
        {
            avatar: jeeva_akr,
            name: "Jeeva Akr",
            email: "anial.drian@microsoft.com",
            phone: "+1-1234567890",
            role: 'Sr. Director, Analytics Sales Strategy Lead',
            link: "https://whoplus.microsoft.com/?_vwp=true&_vwpAlias=JEEVAAKR"
        }, {
            avatar: ana_maria_lopes,
            name: "Ana Maria Lopes",
            email: "anial.drian@microsoft.com",
            phone: "+1-1234567890",
            role: 'Sr. Director, Data Modernization Sales Strategy Lead',
            link: "https://whoplus.microsoft.com/?_vwp=true&_vwpAlias=ANALOPES"
        }, {
            avatar: manaswini_shastri,
            name: "Manaswini Shastri",
            email: "anial.drian@microsoft.com",
            phone: "+1-1234567890",
            role: 'Business Program Manager, Enablement Team',
            link: "https://whoplus.microsoft.com/?_vwp=true&_vwpAlias=MSHASTRI"
        },
    ]
    return (
        <section className=" md:px-32 md:py-10 bg-light-gray ">
            <h4 className="font-semibold pb-8 text-blue">Key Contacts</h4>

            <div className="grid grid-cols-5  gap-10 text-center">

                {
                    teams.map(team => (
                        <div key={team?.name} className="flex flex-col gap-3 items-center   ">
                            <Link  to={team.link}  target={'_blank'}>
                            <img
                                className="  shadow-avatar-shadow rounded-full h-[15rem]"
                                src={team?.avatar}
                                alt="avatar"
                            />
                            </Link>
                            <Link  to={team.link}  target={'_blank'}>
                                <div className="flex flex-col gap-1 items-center text-center">
                                    <h5 className="font-bold text-blue">{team?.name}</h5>
                                    <p className="text-light-light-gray text-2xl font-semibold">{team?.role}</p>

                                </div>
                            </Link>

                        </div>
                    ))
                }


            </div>

            <div className="grid grid-cols-4 px-[5rem] py-[2rem]  text-center items-center">

                {
                    other_four.map(team => (
                        <div key={team?.name} className="flex flex-col gap-3 items-center   ">
                            <Link  to={team.link}  target={'_blank'}>
                            <img
                                className="  shadow-avatar-shadow rounded-full h-[15rem]"
                                src={team?.avatar}
                                alt="avatar"
                            />
                            </Link>
                            <Link  to={team.link}  target={'_blank'}>
                                <div className="flex flex-col gap-1 items-center text-center">
                                    <h5 className="font-bold text-blue">{team?.name}</h5>
                                    <p className="text-light-light-gray text-2xl font-semibold">{team?.role}</p>

                                </div>
                            </Link>

                        </div>
                    ))
                }


            </div>
        </section>
    );
};

export default Teams;
