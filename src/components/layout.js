import React from 'react';
import { Global, css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import { useTheme } from 'emotion-theming';

import Header from './header';
import Text from './text';

const Layout = ({ children }) => {
  const theme = useTheme();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div
      style={{
        width: '3000px',
        maxWidth: '100%',
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <Global
        styles={css`
          html {
            background: ${theme.colors.black};
            font-family: Helvetica Neue;
            color: white;
          }
        `}
      />
      {children}
      <footer>
        <Text>
          {' '}
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Text>
      </footer>
    </div>
  );
};

export default Layout;
