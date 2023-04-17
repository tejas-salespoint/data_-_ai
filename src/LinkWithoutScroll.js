import React from 'react';
import { Link } from 'react-router-dom';

const LinkWithoutScroll = ({ to, children, ...rest }) => {
  const handleLinkClick = (event) => {
    event.preventDefault(); // prevent default anchor tag behavior
    // additional custom logic or navigation here
  };

  return (
    <Link to={to} onClick={handleLinkClick} {...rest}>
      {children}
    </Link>
  );
};

export default LinkWithoutScroll;
