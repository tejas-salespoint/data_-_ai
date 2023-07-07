import React, {useEffect, useState} from "react";
import IndustryDynamicTable from "./IndustryDynamicTable";
import {useCasesButtonIcons} from "constants";
import {useLocation} from "react-router-dom";
import {tab} from "@testing-library/user-event/dist/tab";


const IndustrySolutionPlayes = ({activeIndustryData}) => {

    const pathname = useLocation();
    const industry = activeIndustryData;

    // (pathname?.state?.state?.usecase && (pathname?.state?.state?.solution === activeId))
    const [tabActive, setTabActive] = useState(pathname?.state?.state?.solution   ? pathname?.state?.state?.solution : industry?.solution_plays[0]?.id);


    useEffect(() => {
        setTabActive(pathname?.state?.state?.solution ? pathname?.state?.state?.solution : industry?.solution_plays[0]?.id)
    }, [pathname?.pathname])

    const [tabActiveSolutionPlayTitle, setTabActiveSolutionPlayTitle] = useState(industry?.solution_plays[0]?.title)

    const tabActiveHandler = (id, title) => {
        setTabActive(id);
        setTabActiveSolutionPlayTitle(title);
    };



    useEffect(() => {
        let find = industry?.solution_plays?.find(item => item.id === tabActive);
        console.log(find)
        if (find === undefined) {
            setTabActive(industry?.solution_plays[0]?.id);
        }
    },[])




    return (<>
            <section className="mx-10 my-10  md:mx-32 md:my-10">
                <ul className="flex gap-5  flex-wrap relative overflow-hidden">
                    {industry?.solution_plays?.map((item, index) => (<li
                            onClick={() => tabActiveHandler(item?.id, item?.title)}
                            key={item?.id}
                            className={`flex  items-center whitespace-nowrap cursor-pointer text-2xl font-medium ${index !== industry.solution_plays.length - 1 ? "text-blue bg-light-blue px-3 py-2" : "flex justify-between bg-all-usecases-button-bg items-center text-white  rounded-full gap-4 px-8 py-2 "} ${tabActive === item?.id ? "border-2 border-blue  text-blue" : ""}`}
                        >
                            {item?.title} 

                            {index === industry.solution_plays.length - 1 && (
                                <span className="p-2 w-10 h-10 text- flex justify-center bg-white rounded-full">
                <img className="w-4" src={useCasesButtonIcons} alt="useCasesButton"/>
              </span>)}
                        </li>))}
                    {/* <button
                        className="bg-gradient-to-r border-4  border-blue text-transparent bg-clip-text from-red-500 via-green-500 to-blue-500 font-bold py-2 px-4 rounded">
                        Your Button Text
                    </button> */}


                </ul>

                {/* Dynamic Table */}
                {/* Industry Dynamic Use Cases Table */}
            </section>
            <IndustryDynamicTable tabActive={tabActive} activeId={tabActive} pathname={pathname}
                                  solutionPlay={tabActiveSolutionPlayTitle} activeIndustryData={industry}/>
        </>);
};

export default IndustrySolutionPlayes;