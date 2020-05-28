import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { useTheme } from 'emotion-theming';

import Flexy from '../components/flexy';

const headerLink = css`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  margin-right: 12px;
`;

const Header = ({ siteTitle }) => {
  const theme = useTheme();

  return (
    <header
      css={{
        borderBottom: `1px solid`,
        borderColor: theme.colors.backgroundSecondary,
        padding: '24px 12px 12px 12px',
      }}
    >
      <Flexy
        css={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <h1
          css={{
            textTransform: 'uppercase',
            fontWeight: '200',
            color: 'white',
            margin: 0,
          }}
        >
          {siteTitle}
        </h1>
        <Flexy css={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
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
    </header>
  );
};

export default Header;
