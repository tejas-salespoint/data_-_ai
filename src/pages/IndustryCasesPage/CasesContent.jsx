import {Cases} from "constants";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import Companies from "./Companies";
import Lightbox, {ImagesListType} from 'react-spring-lightbox';

const CasesContent = ({usecase,title}) => {
    usecase = usecase?.use_cases_content[0]


    const images = [
        {
            src: usecase?.idealCostomerProfile?.image,
            loading: 'lazy',
            alt: 'use case img',
        }
    ];

    const [isOpen, setIsOpen] = useState(false);

    const imageActive = () => {
        setIsOpen(prev => !prev)
    }
    const [currentImageIndex, setCurrentIndex] = useState(0);

    const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

    const gotoNext = () =>
        currentImageIndex + 1 < images.length &&
        setCurrentIndex(currentImageIndex + 1);

    return (
        <section className="mx-10 my-10  md:mx-32 md:my-10">
            <div className="grid grid-cols-3 gap-10">
                <div className="flex flex-col gap-8 text-gray">
                    <h4 className="font-semibold pt-6 text-blue">Key Highlights</h4>
                    {/*  */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="font font-semibold text-lg">
                                Decision Makers :
                            </p>
                            <ul className="list-disc mx-6">
                                {
                                    usecase?.keyHighlights?.decision_makers.map((item,index) => (
                                        <li key={index}>
                                            {item}
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div>
                            <p className="font font-semibold text-lg">
                                Decision Making Factors :
                            </p>
                            <ul className="list-disc mx-6">
                                {
                                    usecase?.keyHighlights?.decision_making_factors.map((item,index) => (
                                        <li key={index}>
                                            {item}
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div>
                            <p className="font font-semibold text-lg">
                                {" "}
                                Desired Business Objectives:
                            </p>
                            <ul className="list-disc mx-6">
                                {
                                    usecase?.keyHighlights?.desired_business_objectives.map((item,index) => (
                                        <li key={index}>
                                            {item}
                                        </li>
                                    ))
                                }
                                {/*<li>Better quality assurance pass rates</li>*/}
                                {/*<li> Higher output/yield</li>*/}
                                {/*<li> Reduced scrap and operational costs</li>*/}
                            </ul>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div>
                            <p className="font font-semibold text-lg">
                                Customer Pain Points:
                            </p>
                            <ul className="list-disc mx-6">
                                {
                                    usecase?.keyHighlights?.customer_pain_points.map((item,index) => (
                                        <li key={index}>
                                            {item}
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>

                    </div>


                    <div className={'grid grid-cols-2 gap-4'}>

                        <div>


                            <p className="font font-semibold text-lg">
                                {" "}
                                Products/Tech Stack:
                            </p>
                            <ul className="list-disc mx-6">
                                {
                                    usecase?.keyHighlights?.products?.map((item,index) => (
                                        <li key={index}>
                                            {item}
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>


                        <div>
                            <p className="font font-semibold text-lg">
                                {" "}
                                Proposed Technical Solution:
                            </p>
                            <ul className="list-disc mx-6">
                                {
                                    usecase?.keyHighlights?.proposed_technical_solution?.map((item,index) => (
                                        <li key={index}>
                                            {item}
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>

                    </div>

                    <div>
                        <p className="font font-semibold text-lg">
                            Other Notable Attributes:
                        </p>
                        <ul className="list-disc mx-6">
                            {
                                usecase?.keyHighlights?.other_notable_attributes?.map((item,index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>

                <div
                    style={{
                        margin: "0 5rem",
                    }}
                    className=""
                >
                    {/* second side */}
                    <div className="flex flex-col gap-10   ">
                        <h4 className="font-semibold pt-6 text-blue">
                            Ideal Customer Profile
                        </h4>

                        <div className="flex flex-col">
                            <p className="font-medium">Industries : {usecase?.idealCostomerProfile?.industries}</p>
                            <p className="font-medium">Geography : </p>
                            <p className="font-medium">Market Cap :</p>
                            <p className="font-medium"># of Employees : </p>
                            <p className="font-medium">Budget/Month :</p>
                        </div>

                        <div className="flex justify-end  text-center  flex-col">
                            {
                                usecase?.idealCostomerProfile?.image &&
                                <>
                                    <img
                                        onClick={imageActive}
                                        className="w-[100%]"
                                        src={images[0].src}
                                        alt="cases"

                                    />
                                </>
                            }

                            <div>
                                <p className="text-center  pt-1 font-bold text-blue">
                                    {usecase?.idealCostomerProfile?.image_subtitle}
                                </p>

                                <p className={'font-semibold'}> For more Information  <a className="text-blue font-semibold" target="_blank" href={usecase?.idealCostomerProfile?.image_link}> Click Here </a></p>
                            </div>

                        </div>
                    </div>
                </div>


                <Companies usecase={title}/>
            </div>

            <Lightbox
                isOpen={isOpen}
                onPrev={gotoPrevious}
                onNext={gotoNext}
                images={images}
                singleClickToZoom
                currentIndex={currentImageIndex}
                onClose={imageActive}
                /* Add your own UI */
                // renderHeader={() => (<CustomHeader />)}
                // renderFooter={() => (<CustomFooter />)}
                // renderPrevButton={() => (<CustomLeftArrowButton />)}
                // renderNextButton={() => (<CustomRightArrowButton />)}
                // renderImageOverlay={() => (<ImageOverlayComponent >)}

                /* Add styling */
                // className="cool-class"
                // style={{ background: "grey" }}

                /* Handle closing */
                // onClose={handleClose}

                /* Use single or double click to zoom */
                // singleClickToZoom

                /* react-spring config for open/close animation */
                // pageTransitionConfig={{
                //   from: { transform: "scale(0.75)", opacity: 0 },
                //   enter: { transform: "scale(1)", opacity: 1 },
                //   leave: { transform: "scale(0.75)", opacity: 0 },
                //   config: { mass: 1, tension: 320, friction: 32 }
                // }}
            />

        </section>
    );
};

export default CasesContent;
