// import { Industry } from "data/Industry/Industry_data";
// import React from "react";
// import { Link } from "react-router-dom";
//
// const IndustryNavbar = ({ activeTab }) => {
//
//   return (
//     <div className="w-full h-24  bg-img-banner bg-no-repeat bg-cover flex flex-col justify-center shadow-navbar-shadow">
//       <ul className="flex h-full items-center  flex-row justify-between gap-10  mx-10   md:mx-32 ">
//         {Industry.map((industry) => {
//           return (
//             <li
//             key={industry?.id}
//               className={`flex items-center h-full p-3 text-white font-medium text-2xl ${
//                 activeTab === industry?.link ? "border-b-8 font-bold" : ""
//               } hover:border-b-8`}
//             >
//               <Link to={`/industry/${industry?.link}`} key={industry?.title}>{industry?.title}</Link>
//             </li>
//           );
//         })}
//
//
//         <Link to={"/industry_grid"}>
//           <li className="flex items-center p-3 px-5 rounded-full  bg-white text-blue font-medium text-2xl ">
//             All Industries
//           </li>
//         </Link>
//       </ul>
//     </div>
//   );
// };
//
// export default IndustryNavbar;

import {Industry} from "../../data/Industry/Industry_data";
import { useNavigate, Link } from 'react-router-dom';

const IndustryNavbar = ({ activeTab, onLinkClick }) => {
    const navigate = useNavigate();

    const handleClick = (link) => {
        onLinkClick(link);
        navigate(`/industry/${link}`);
    };

    return (
        <div className="w-full h-24 bg-img-banner bg-no-repeat bg-cover flex flex-col justify-center shadow-navbar-shadow">
            <ul className="flex h-full items-center flex-row justify-between gap-10 mx-10 md:mx-32">
                {Industry.map((industry) => (
                    <li
                        key={industry?.id}
                        className={`flex items-center h-full p-3 text-white font-medium text-2xl ${
                            activeTab === industry?.link ? 'border-b-8 font-bold' : ''
                        } hover:border-b-8`}
                    >
                        <Link to={`/industry/${industry?.link}`} onClick={() => handleClick(industry?.link)}>
                            {industry?.title}
                        </Link>
                    </li>
                ))}

                <Link to="/industry_grid">
                    <li className="flex items-center p-3 px-5 rounded-full bg-white text-blue font-medium text-2xl">
                        All Industries
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default IndustryNavbar;
