import React from 'react';

import './Avatar.scss';

const Avatar = ({ className, style, img, alt, width }) => {
  return (
    <div className={`avatar ${className}`} style={style}>
      <img src={img} alt={alt} style={{ width: width, height: width }} />
    </div>
  );
};

export default Avatar;
