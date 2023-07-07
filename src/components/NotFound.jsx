import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <>
            {/* component */}
            <div
                className="w-full h-[100%]"
                style={{
                    backgroundImage:
                        'url("https://vojislavd.com/ta-template-demo/assets/img/coming-soon.jpg")'
                }}
            >
                <div className="w-full h-[100vh] flex flex-col items-center justify-between bg-black bg-opacity-70 py-8">
                    <div className="flex-1 h-[100%] flex flex-col items-center justify-center">

                        <h1 className="text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center">
                            Coming Soon
                        </h1>

                        <div className="bg-white m-12  bg-opacity-10 px-4 py-2 rounded-xl flex items-center justify-center text-cyan-100 space-x-2 lg:space-x-4">
                         <Link to={'/'}>
                              <span className="text-xl lg:text-2xl xl:text-3xl font-bold">
          Return Home
          </span>
                         </Link>

                        </div>

                    </div>

                </div>
            </div>
        </>

    );
};

export default NotFound;