import React from 'react';
import mailIcon from '../../images/mail.png';

const Mail = () => {
  return (
    <a
      href="mailto:korina.pluss@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Email Me"
    >
      <img width="32px" height="32px" src={mailIcon} alt-text="mail icon"></img>
    </a>
  );
};

export default Mail;
