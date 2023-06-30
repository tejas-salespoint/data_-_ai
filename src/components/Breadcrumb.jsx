import { Breadcrumb } from "flowbite-react";
import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { HiHome } from 'react-icons/hi';

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <React.Fragment>

<Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item
        href="#"
        icon={HiHome}
      >
        <p>
          Home
        </p>
      </Breadcrumb.Item>
     

      {breadcrumbs.map(({  match, breadcrumb }) =>  <Breadcrumb.Item className="text-white"  key={match.pathname} href={match?.pathname}>
        {breadcrumb}
      </Breadcrumb.Item>)}
    </Breadcrumb>
    </React.Fragment>
  );
};

export default Breadcrumbs;