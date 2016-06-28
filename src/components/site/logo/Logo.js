import React, { PropTypes } from 'react';

function Logo({ className }) {
  
  return (
    <div className={className}>
      Logo
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string
};

export default Logo;
