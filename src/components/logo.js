import React from 'react';

const Logo = () => {
  return (
    <svg width="50px" height="50px">
      <rect rx="5" ry="5" width="50" height="50" style={{ fill: '#444444' }} />
      <line x1="0" y1="5" x2="50" y2="5" stroke="#aaaaaa" strokeWidth={0.2} />
      <line x1="5" y1="0" x2="5" y2="50" stroke="#aaaaaa" strokeWidth={0.2} />
      <line x1="45" y1="0" x2="45" y2="50" stroke="#aaaaaa" strokeWidth={0.2} />
      <line x1="0" y1="45" x2="50" y2="45" stroke="#aaaaaa" strokeWidth={0.2} />
      <text x="10" y="30" fontSize="20px" fill="#ebe8ea">
        kp
      </text>
    </svg>
  );
};

export default Logo;
