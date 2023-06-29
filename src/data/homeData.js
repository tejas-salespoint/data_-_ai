//  Level 0 page : featured resources data

import {Feature_1} from "constants";
import {Feature_4} from "constants";
import {Feature_5} from "constants";
import {Feature_6} from "constants";
import {Feature_3} from "constants";
import {Feature_2} from "constants";


export const featuredResourcesData = [
    {
        id: 1,
        title: "Commercial Strategy & Execution Portal",
        img: Feature_1,
        // D&AI Leadership Top of Mind (Zia's Monthly) --- (If this is on sharepoint, link it)
        link: "https://microsoft.sharepoint.com/teams/Commercial_Strategy_Execution_Portal",
        target: "_blank",
    },
    {
        id: 2,
        title: "Azure OpenAI Sales Resources",
        img: Feature_2,
        link: "https://gearup.microsoft.com/product/azure-openai-service?tab=sales",
        target: "_blank",
    },

    {
        id: 3,
        title: "FY24 Solution Plays",
        img: Feature_3,
        // FY24 Solution Plays (PPT that Marketing Owns;https://aka.ms/fy23solutionplays)
        link: "https://aka.ms/fy24solutionplays",
        target: "_blank",
    },

    {
        id: 4,
        title: "DAI Dream Demos",
        img: Feature_4,
        link: "https://aka.ms/dreamdemos",
    },
    {
        id: 5,

        title: "DAI Industry Megamap",
        img: Feature_5,
        // jimmy to find link
        link: "https://aka.ms/daiindustrymegamap",
    },
    {
        id: 6,
        title: "DAI Learning Resources",
        img: Feature_6,
        link: "https://learn.microsoft.com/en-us/training/browse/?subjects=data-ai",
        target: "_blank",
    },
];

