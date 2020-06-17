import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import mq from '../styles/media-queries';
import Flexy from '../components/flexy';

const headerLink = css`
  color: black;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1.75px;
  margin: 0 20px;
  text-decoration: none;
  text-transform: uppercase;
  &:last-child {
    margin-right: 0px;
  }
`;

const Header = ({ siteTitle }) => {
  return (
    <header
      css={{
        height: '80px',
        width: '100%',
        top: '0px',
        zIndex: '10',
      }}
    >
      <div
        css={mq({
          margin: '2px auto',
          width: ['360px', '420px', '768px', '990px', '1120px'],
          minWidth: ['360px', '420px', '768px', '990px', '1120px'],
        })}
      >
        <Flexy
          css={{
            height: '80px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Flexy>
            <a
              css={{
                textTransform: 'uppercase',
                textDecoration: 'none',
                letterSpacing: '1.5px',
                fontWeight: '700',
              }}
            >
              {siteTitle}
            </a>
          </Flexy>
          <Flexy>
            <Link to="/" css={headerLink}>
              home
            </Link>
            <Link to="/projects" css={headerLink}>
              projects
            </Link>
            <Link to="/about" css={headerLink}>
              about
            </Link>
          </Flexy>
        </Flexy>
      </div>
    </header>
  );
};

export default Header;
