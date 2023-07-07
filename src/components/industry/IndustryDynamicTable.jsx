import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Parser from "html-react-parser";

const IndustryDynamicTable = ({ activeId, activeIndustryData, tabActive, solutionPlay ,pathname}) => {
    // Find the solution_play based on the activeId
    const solution_play = activeIndustryData?.solution_plays?.find((play) => play?.id === activeId) ?? {};

    // Set the default toggleState to the first use case id
    const [toggleState, setToggleState] = useState( (pathname?.state?.state?.usecase && (pathname?.state?.state?.solution === activeId)) ? pathname?.state?.state?.usecase : solution_play?.use_cases?.[0]?.id);

    useEffect(() => {
        setToggleState((pathname?.state?.state?.usecase && (pathname?.state?.state?.solution === activeId)) ? pathname?.state?.state?.usecase : solution_play?.use_cases?.[0]?.id);
    }, [pathname?.pathname,activeId]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    if (!solution_play) {
        // Handle the case when the solution_play is not available yet
        return "Loading...";
    }

    const currentUseCases = solution_play?.use_cases?.find((cases) => cases.id === toggleState);

    const LinkData = activeIndustryData?.link && currentUseCases?.solution_play && currentUseCases?.title

    return (
        <section className="mx-10 my-10 h-[42rem] overflow-hidden  md:mx-32 md:my-10 grid grid-cols-3 grid-flow-row border m-5 border-gray-600 ">
            <div className="flex flex-col overflow-y-scroll">
                <div className={`m-5`}>
                    <h4 className="text-blue font-bold mb-9">{solution_play?.title}</h4>
                    <div className="flex flex-col gap-6">
                        {Parser(solution_play?.content || "")}
                    </div>
                </div>
            </div>

            <div className={`bg-light-blue`}>
                <div className=" flex flex-col  gap-2   bg-light-blue pt-8 w-100">
                    { currentUseCases?.title &&  solution_play?.use_cases?.map((cases) => (
                        <label
                            key={cases?.id}
                            onClick={() => toggleTab(cases?.id)}
                            className={`text-blue text-lg font-bold p-3 px-6  ${
                                toggleState === cases?.id
                                    ? "bg-white border-l-8 border-black w-100 shadow-custom-shadow"
                                    : ""
                            }`}
                        >
                            {cases?.title}
                        </label>
                    ))}
                </div>
            </div>

            <div className="p-5 overflow-y-scroll">
                {currentUseCases?.title && (
                    <div>
                        <h4 className="font-bold text-blue mb-9">{currentUseCases?.title}</h4>
                        <div className="flex gap-4 flex-col">
                            <p className="font-bold">
                                {currentUseCases?.use_cases_content?.[0]?.subtitle}
                            </p>
                            {Parser(currentUseCases?.use_cases_content?.[0]?.desc || "")}
                        </div>
                        <button className="px-3 py-2 my-6 bg-blue text-sm font-extrabold rounded-full text-white">
                            {    }
                            <Link
                                state={{
                                    solution : activeId,
                                    usecase : currentUseCases?.id ,
                                }}
                                to={`/industry/${activeIndustryData?.link}/${currentUseCases?.solution_play ?? solutionPlay}/${currentUseCases?.title}`}
                            >
                                See more
                            </Link>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default IndustryDynamicTable;
