import { Breadcrumb } from "flowbite-react";
import React from "react";

import { HiHome , HiChevronRight} from 'react-icons/hi';

import useBreadcrumb from "../utils/useBreadCrumb";
import {Link} from "react-router-dom";

const Breadcrumbs = () => {
  // const breadcrumbs = useBreadcrumbs();
  // console.log(breadcrumbs)
  //   const location = useLocation();
  // console.log(location)

    const breadcrumbs = useBreadcrumb();


  return (
    <React.Fragment>

        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center group ">
                    <Link to={'/'}
                       className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <HiHome className={'text-xl text-white mr-2 group-hover:text-breadcrumb_color'} />
                        <p className={'text-white group-hover:text-breadcrumb_color'}>
                            Home
                        </p>

                    </Link>
                </li>


                {breadcrumbs.map(({ path, label }, index) => (
                    <li key={index}>
                        <div className="flex items-center group">
                            <HiChevronRight className="text-2xl text-white group-hover:text-breadcrumb_color" />
                            {index === breadcrumbs.length - 1 ? (
                                <span className="ml-1 text-sm font-medium text-gray-700 group-hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                <p className="text-white hover:text-breadcrumb_color">{label}</p>
              </span>
                            ) : (
                                <Link
                                    to={path}
                                    className="ml-1 text-sm font-medium text-gray-700 group-hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                >
                                    <p className="text-white hover:text-breadcrumb_color">{label}</p>
                                </Link>
                            )}
                        </div>
                    </li>
                ))}





            </ol>
        </nav>
    </React.Fragment>
  );
};

export default Breadcrumbs;